import { tools } from './agent';

// Minimal MCP server logic (JSON-RPC 2.0), transport-agnostic so it can be
// tested in Node and served by the Cloudflare Worker in worker/index.ts.
const SUPPORTED_VERSIONS = ['2025-06-18', '2025-03-26', '2024-11-05'];

export const serverInfo = { name: 'joao-pereira-portfolio', version: '1.0.0' };

type Rpc = {
  jsonrpc?: string;
  id?: string | number | null;
  method?: string;
  params?: any;
};

const ok = (id: Rpc['id'], result: unknown) => ({ jsonrpc: '2.0', id, result });
const fail = (id: Rpc['id'], code: number, message: string) => ({
  jsonrpc: '2.0',
  id: id ?? null,
  error: { code, message },
});

// Returns the JSON-RPC response, or null for notifications (no reply expected).
export function handleRpc(msg: Rpc) {
  if (!msg || typeof msg.method !== 'string') {
    return fail(msg?.id, -32600, 'Invalid Request');
  }
  if (msg.id === undefined) return null;

  switch (msg.method) {
    case 'initialize': {
      const asked = msg.params?.protocolVersion;
      return ok(msg.id, {
        protocolVersion: SUPPORTED_VERSIONS.includes(asked)
          ? asked
          : SUPPORTED_VERSIONS[0],
        capabilities: { tools: {} },
        serverInfo,
        instructions:
          'Portfolio of João Pereira, Senior Mobile Developer. Call get_resume or get_projects (optional language: en | pt).',
      });
    }
    case 'ping':
      return ok(msg.id, {});
    case 'tools/list':
      return ok(msg.id, {
        tools: tools.map(({ run, ...tool }) => ({
          ...tool,
          annotations: { readOnlyHint: true },
        })),
      });
    case 'tools/call': {
      const tool = tools.find(t => t.name === msg.params?.name);
      if (!tool) {
        return fail(msg.id, -32602, `Unknown tool: ${msg.params?.name}`);
      }
      return ok(msg.id, {
        content: [
          {
            type: 'text',
            text: JSON.stringify(tool.run(msg.params?.arguments), null, 2),
          },
        ],
      });
    }
    default:
      return fail(msg.id, -32601, `Method not found: ${msg.method}`);
  }
}
