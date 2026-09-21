# Agent guide: João Pereira

This portfolio is readable by agents without scraping or screenshots.

## WebMCP (in the browser)
Open https://joaopereiradev.vercel.app/en in a WebMCP-capable browser. These read-only tools are registered on `document.modelContext`:

- `get_resume`: Returns the resume and technical skills of João Pereira (Senior Mobile Developer) as JSON Resume: summary, skills, work history, contact links and CV URL.
- `get_projects`: Lists the mobile projects João Pereira has worked on, grouped by domain (fintech, social networking, delivery, live streaming), with what he built and the technologies used.
- `check_availability`: Checks whether João Pereira (Senior Mobile Developer) is available for new work: freelance/contract or full-time, and how to reach him.

All accept `{ "language": "en" | "pt" }`.

## Remote MCP server
Endpoint: https://portfolio-mcp.joaovitorspereira.workers.dev/mcp (streamable HTTP, JSON-RPC 2.0, no auth). Same tools, same data.
- Claude: Settings → Connectors → Add custom connector → paste the URL.
- Cursor / others: add it as a streamable-HTTP MCP server.
- curl: `curl -s -X POST https://portfolio-mcp.joaovitorspereira.workers.dev/mcp -H 'content-type: application/json' -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'`

## Static files
- https://joaopereiradev.vercel.app/resume.json (JSON Resume, EN) and /resume.pt.json (PT)
- https://joaopereiradev.vercel.app/llms.txt and /llms-full.txt
- Each page embeds schema.org `Person` JSON-LD.

## Contact
joaovitorspereira@gmail.com
