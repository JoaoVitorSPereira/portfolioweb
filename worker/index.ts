// Cloudflare Worker exposing the portfolio as a remote MCP server
// (streamable HTTP, stateless, JSON responses). Deploy: npm run worker:deploy
import { tools } from '../src/lib/agent';
import type { Intro } from '../src/lib/agent';
import { handleRpc, serverInfo } from '../src/lib/mcp';

// Set with `npx wrangler secret put <NAME> -c worker/wrangler.toml`.
interface Env {
  RESEND_API_KEY?: string;
  INTRO_TO_EMAIL?: string;
}

// Plain-text email through Resend; reply_to is the visitor so hitting reply just works.
async function sendIntro(env: Env, { name, email, message }: Intro) {
  if (!env.RESEND_API_KEY || !env.INTRO_TO_EMAIL) {
    throw new Error('Email delivery is not configured on the server.');
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio MCP <onboarding@resend.dev>',
      to: [env.INTRO_TO_EMAIL],
      reply_to: email,
      subject: `Portfolio intro from ${name.slice(0, 80)}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });
  if (!res.ok)
    throw new Error('Could not deliver the message, try again later.');
}

const cors = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, OPTIONS',
  'access-control-allow-headers':
    'content-type, accept, mcp-session-id, mcp-protocol-version',
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...cors },
  });

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    if (req.method === 'GET') {
      // No server-initiated stream: SSE clients get 405, browsers get a readable summary.
      if (req.headers.get('accept')?.includes('text/event-stream')) {
        return new Response(null, { status: 405, headers: cors });
      }
      return json({
        ...serverInfo,
        description:
          'Public MCP server for João Pereira’s portfolio. Send JSON-RPC 2.0 POST requests.',
        tools: tools.map(({ name, description }) => ({ name, description })),
      });
    }

    if (req.method !== 'POST') {
      return new Response(null, { status: 405, headers: cors });
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return json(
        {
          jsonrpc: '2.0',
          id: null,
          error: { code: -32700, message: 'Parse error' },
        },
        400,
      );
    }

    const batch = Array.isArray(body);
    const ctx = { deliver: (intro: Intro) => sendIntro(env, intro) };
    const replies = (
      await Promise.all(
        (Array.isArray(body) ? body : [body]).map(m => handleRpc(m, ctx)),
      )
    ).filter(Boolean);
    if (!replies.length)
      return new Response(null, { status: 202, headers: cors });
    return json(batch ? replies : replies[0]);
  },
};
