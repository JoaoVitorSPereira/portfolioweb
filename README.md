## Personal Portfolio

Setup:

- run `npm i && npm run dev`

## Agent surfaces (AEO / WebMCP / MCP)

- `src/lib/agent.ts` is the single source for what agents can read.
- `npm run dev|build` generate `public/resume.json`, `llms.txt`, `agents.md`, `sitemap.xml`.
- WebMCP tools are registered in the browser by `src/components/WebMCP`.
- Remote MCP server: `worker/` (Cloudflare Worker). `npm run worker:dev` to try it locally,
  `npm run worker:deploy` to publish (needs `npx wrangler login` once), then set `MCP_URL` in `src/lib/agent.ts`.
- `npm run test:mcp` smoke-tests the MCP handler.
