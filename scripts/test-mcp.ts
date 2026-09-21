// Smoke test for the MCP handler: `npm run test:mcp`
import assert from 'node:assert/strict';

import type { Intro, ToolContext } from '../src/lib/agent';
import { handleRpc } from '../src/lib/mcp';

interface Reply {
  result?: {
    isError?: boolean;
    protocolVersion?: string;
    capabilities?: { tools?: object };
    tools?: { name: string; inputSchema?: object }[];
    content?: { text: string }[];
  };
  error?: { code: number };
}

const call = async (method: string, params?: unknown, ctx?: ToolContext) =>
  (await handleRpc({ jsonrpc: '2.0', id: 1, method, params }, ctx)) as Reply;

const text = (reply: Reply): string => reply.result?.content?.[0]?.text ?? '';

async function main() {
  const init = await call('initialize', { protocolVersion: '2025-03-26' });
  assert.equal(init.result?.protocolVersion, '2025-03-26');
  assert.ok(init.result?.capabilities?.tools);

  assert.equal(
    await handleRpc({ jsonrpc: '2.0', method: 'notifications/initialized' }),
    null,
  );

  const list = (await call('tools/list')).result?.tools ?? [];
  assert.deepEqual(list.map(t => t.name).sort(), [
    'book_intro',
    'check_availability',
    'get_projects',
    'get_resume',
  ]);
  assert.ok(list.every(t => t.inputSchema && !('run' in t)));

  const projects = JSON.parse(
    text(
      await call('tools/call', {
        name: 'get_projects',
        arguments: { language: 'pt' },
      }),
    ),
  );
  assert.equal(projects.length, 5);
  assert.equal(projects[0].domain, 'Fintech & Banco Digital');

  const resume = JSON.parse(
    text(await call('tools/call', { name: 'get_resume' })),
  );
  assert.equal(resume.basics.name, 'João Pereira');
  assert.ok(
    !JSON.stringify(resume).includes('DKMBank'),
    'company names must not leak',
  );

  assert.equal(
    (await call('tools/call', { name: 'nope' })).error?.code,
    -32602,
  );
  assert.equal((await call('does/not/exist')).error?.code, -32601);

  const avail = JSON.parse(
    text(await call('tools/call', { name: 'check_availability' })),
  );
  assert.equal(avail.available, true);

  // book_intro: validates, refuses without a delivery channel, delivers with one.
  const intro = { name: 'Ada', email: 'ada@example.com', message: 'Hi João' };
  const sent: Intro[] = [];
  const ctx: ToolContext = { deliver: async i => void sent.push(i) };
  const book = (args: object, c?: ToolContext) =>
    call('tools/call', { name: 'book_intro', arguments: args }, c);

  assert.equal(
    (await book({ ...intro, email: 'nope' }, ctx)).result?.isError,
    true,
  );
  assert.equal(
    (await book({ ...intro, message: '' }, ctx)).result?.isError,
    true,
  );
  assert.equal((await book(intro)).result?.isError, true);
  assert.equal(sent.length, 0);
  assert.equal((await book(intro, ctx)).result?.isError, undefined);
  assert.deepEqual(sent, [intro]);

  console.log('mcp ok');
}

main();
