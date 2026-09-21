// Generates the static, machine-readable surfaces in public/ from the same
// data the site renders. Runs before `dev` and `build`.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { MCP_URL, SITE_URL, getResume, links, tools } from '../src/lib/agent';

const out = join(process.cwd(), 'public');
mkdirSync(out, { recursive: true });
const write = (name: string, body: string) =>
  writeFileSync(join(out, name), body.endsWith('\n') ? body : body + '\n');

const resume = getResume('en');
const { basics } = resume;

write('resume.json', JSON.stringify(resume, null, 2));
write('resume.pt.json', JSON.stringify(getResume('pt'), null, 2));

write(
  'llms.txt',
  `# ${basics.name}

> ${basics.label}. ${basics.summary}

## Machine-readable
- [Resume, JSON Resume (EN)](${SITE_URL}/resume.json): resume, skills and work history
- [Resume, JSON Resume (PT)](${SITE_URL}/resume.pt.json)
- [Full profile as text](${SITE_URL}/llms-full.txt): everything on the site in one file
- [Agent guide](${SITE_URL}/agents.md): WebMCP tools and how to call them
${MCP_URL ? `- [Remote MCP server](${MCP_URL}): tools ${tools.map(t => t.name).join(', ')} over JSON-RPC (streamable HTTP)\n` : ''}- [CV (PDF)](${links.cv})

## Pages
- [Portfolio (EN)](${SITE_URL}/en)
- [Portfolio (PT)](${SITE_URL}/pt)

## Contact
- Email: ${links.email}
- GitHub: ${links.github}
- LinkedIn: ${links.linkedin}
`,
);

write(
  'llms-full.txt',
  `# ${basics.name}: ${basics.label}

${basics.summary}

## Skills
${resume.skills.map(s => `- ${s.name}: ${s.keywords.join(', ')}`).join('\n')}

## Work
${resume.work
  .map(
    w => `### ${w.name}, ${w.position}

${w.summary}

Technologies: ${w.keywords.join(', ')}`,
  )
  .join('\n\n')}

## Career
${resume.meta.career
  .map(c => `### ${c.year}, ${c.title}\n\n${c.description.join('\n\n')}`)
  .join('\n\n')}

## What I've built along the way
${resume.meta.highlights.map(h => `- ${h.title}: ${h.text}`).join('\n')}

## Contact
- Email: ${links.email}
- GitHub: ${links.github}
- LinkedIn: ${links.linkedin}
- CV: ${links.cv}
`,
);

write(
  'agents.md',
  `# Agent guide: ${basics.name}

This portfolio is readable by agents without scraping or screenshots.

## WebMCP (in the browser)
Open ${SITE_URL}/en in a WebMCP-capable browser. These read-only tools are registered on \`document.modelContext\`:

${tools
  .filter(t => t.readOnly)
  .map(t => `- \`${t.name}\`: ${t.description}`)
  .join('\n')}

All accept \`{ "language": "en" | "pt" }\`.

${
  MCP_URL
    ? `## Remote MCP server
Endpoint: ${MCP_URL} (streamable HTTP, JSON-RPC 2.0, no auth). Same tools, same data.
- Claude: Settings → Connectors → Add custom connector → paste the URL.
- Cursor / others: add it as a streamable-HTTP MCP server.
- curl: \`curl -s -X POST ${MCP_URL} -H 'content-type: application/json' -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'\`

`
    : ''
}## Static files
- ${SITE_URL}/resume.json (JSON Resume, EN) and /resume.pt.json (PT)
- ${SITE_URL}/llms.txt and /llms-full.txt
- Each page embeds schema.org \`Person\` JSON-LD.

## Contact
${links.email}
`,
);

write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_URL}/en</loc></url>
  <url><loc>${SITE_URL}/pt</loc></url>
</urlset>
`,
);

console.log('agent files written to public/');
