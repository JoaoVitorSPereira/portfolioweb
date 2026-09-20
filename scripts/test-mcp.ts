// Smoke test for the MCP handler: `npm run test:mcp`
import assert from 'node:assert/strict';

import { handleRpc } from '../src/lib/mcp';

const call = (method: string, params?: unknown) =>
  handleRpc({ jsonrpc: '2.0', id: 1, method, params }) as any;

const init = call('initialize', { protocolVersion: '2025-03-26' });
assert.equal(init.result.protocolVersion, '2025-03-26');
assert.ok(init.result.capabilities.tools);

assert.equal(
  handleRpc({ jsonrpc: '2.0', method: 'notifications/initialized' }),
  null,
);

const list = call('tools/list').result.tools;
assert.deepEqual(list.map((t: any) => t.name).sort(), [
  'get_projects',
  'get_resume',
]);
assert.ok(list.every((t: any) => t.inputSchema && !('run' in t)));

const projects = JSON.parse(
  call('tools/call', { name: 'get_projects', arguments: { language: 'pt' } })
    .result.content[0].text,
);
assert.equal(projects.length, 5);
assert.equal(projects[0].domain, 'Fintech & Banco Digital');

const resume = JSON.parse(
  call('tools/call', { name: 'get_resume' }).result.content[0].text,
);
assert.equal(resume.basics.name, 'João Pereira');
assert.ok(
  !JSON.stringify(resume).includes('DKMBank'),
  'company names must not leak',
);

assert.equal(call('tools/call', { name: 'nope' }).error.code, -32602);
assert.equal(call('does/not/exist').error.code, -32601);

console.log('mcp ok');
