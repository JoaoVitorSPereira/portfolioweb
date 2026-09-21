import { tools, type ToolContext, type ToolInput } from './agent';

// Minimal MCP server logic (JSON-RPC 2.0), transport-agnostic so it can be
// tested in Node and served by the Cloudflare Worker in worker/index.ts.
const SUPPORTED_VERSIONS = ['2025-06-18', '2025-03-26', '2024-11-05'];

export const serverInfo = { name: 'joao-pereira-portfolio', version: '1.0.0' };

interface Rpc {
  jsonrpc?: string;
  id?: string | number | null;
  method?: string;
  params?: {
    protocolVersion?: string;
    name?: string;
    arguments?: ToolInput;
  };
}

const ok = (id: Rpc['id'], result: unknown) => ({ jsonrpc: '2.0', id, result });
const fail = (id: Rpc['id'], code: number, message: string) => ({
  jsonrpc: '2.0',
  id: id ?? null,
  error: { code, message },
});

// Takes untrusted JSON. Returns the JSON-RPC response, or null for
// notifications (no reply expected).
export async function handleRpc(input: unknown, ctx?: ToolContext) {
  const msg = input as Rpc | null;
  if (!msg || typeof msg.method !== 'string') {
    return fail(msg?.id, -32600, 'Invalid Request');
  }
  if (msg.id === undefined) return null;

  switch (msg.method) {
    case 'initialize': {
      const asked = msg.params?.protocolVersion;
      return ok(msg.id, {
        protocolVersion:
          asked && SUPPORTED_VERSIONS.includes(asked)
            ? asked
            : SUPPORTED_VERSIONS[0],
        capabilities: { tools: {} },
        serverInfo,
        instructions:
          'Portfolio of João Pereira, Senior Mobile Developer. Call get_resume, get_projects or check_availability (optional language: en | pt); use book_intro (name, email, message) to contact him.',
      });
    }
    case 'ping':
      return ok(msg.id, {});
    case 'tools/list':
      return ok(msg.id, {
        tools: tools.map(({ run, readOnly, ...tool }) => ({
          ...tool,
          annotations: readOnly
            ? { readOnlyHint: true }
            : {
                readOnlyHint: false,
                destructiveHint: false,
                openWorldHint: true,
              },
        })),
      });
    case 'tools/call': {
      const tool = tools.find(t => t.name === msg.params?.name);
      if (!tool) {
        return fail(msg.id, -32602, `Unknown tool: ${msg.params?.name}`);
      }
      try {
        const result = await tool.run(msg.params?.arguments, ctx);
        return ok(msg.id, {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        });
      } catch (e) {
        // Tool failures are results (isError), not protocol errors, so the agent can read them.
        return ok(msg.id, {
          isError: true,
          content: [
            {
              type: 'text',
              text: e instanceof Error ? e.message : 'Tool failed',
            },
          ],
        });
      }
    }
    default:
      return fail(msg.id, -32601, `Method not found: ${msg.method}`);
  }
}
