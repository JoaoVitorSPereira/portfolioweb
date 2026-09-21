import {
  experiences,
  highlights,
  skillGroups,
  timeline,
} from '@/constants/constants';
import en from '@/locales/en/translation.json';
import pt from '@/locales/pt/translation.json';

// Single source of truth for everything an AI agent can read: the WebMCP tools
// (browser), the generated /resume.json, llms.txt and the JSON-LD in <head>.
export const SITE_URL = 'https://joaovitorspereira.github.io/portfolioweb';

// Worker URL from `npm run worker:deploy`; advertised in llms.txt and agents.md.
export const MCP_URL =
  'https://portfolio-mcp.joaovitorspereira.workers.dev/mcp';

export type Lang = 'en' | 'pt';

export interface ToolInput {
  language?: string;
  name?: string;
  email?: string;
  message?: string;
}

// Provided by the Worker so `book_intro` can deliver; absent in the browser.
export interface ToolContext {
  deliver?: (intro: Intro) => Promise<void>;
}

export interface Intro {
  name: string;
  email: string;
  message: string;
}
const copy = { en, pt };
const lang = (l?: string): Lang => (l === 'pt' ? 'pt' : 'en');

export const links = {
  email: 'joaovitorspereira@gmail.com',
  github: 'https://github.com/JoaoVitorSPereira',
  linkedin: 'https://www.linkedin.com/in/joaovitorspereira/',
  cv: `${SITE_URL}/cvfolder/JoaoPereira_CV.pdf`,
};

const headline = (l: Lang) => copy[l].welcomeDescription.replace(/\.$/, '');

export function getProjects(language?: string) {
  const l = lang(language);
  return experiences.map(e => ({
    domain: l === 'pt' ? e.titlePT : e.title,
    role: l === 'pt' ? e.rolePT : e.role,
    description: l === 'pt' ? e.paragraphsPT : e.paragraphs,
    technologies: e.tags,
  }));
}

// JSON Resume (https://jsonresume.org/schema) so existing tooling can read it.
export function getResume(language?: string) {
  const l = lang(language);
  return {
    $schema:
      'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: 'João Pereira',
      label: headline(l),
      email: links.email,
      url: `${SITE_URL}/${l}`,
      summary: copy[l].welcomeText,
      profiles: [
        { network: 'GitHub', url: links.github },
        { network: 'LinkedIn', url: links.linkedin },
      ],
    },
    work: getProjects(l).map(p => ({
      name: p.domain,
      position: p.role,
      summary: p.description.join('\n\n'),
      keywords: p.technologies,
    })),
    skills: skillGroups.map(g => ({ name: g.title, keywords: g.tags })),
    meta: {
      language: l,
      yearsOfExperience: parseInt(copy[l].expValue, 10),
      cv: links.cv,
      career: timeline.map(t => ({
        year: t.year,
        title: l === 'pt' ? t.titlePT : t.title,
        description: l === 'pt' ? t.paragraphsPT : t.paragraphs,
      })),
      highlights: highlights.map(h => ({
        title: l === 'pt' ? h.titlePT : h.title,
        text: l === 'pt' ? h.textPT : h.text,
      })),
    },
  };
}

export function getJsonLd(language?: string) {
  const l = lang(language);
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'João Pereira',
    jobTitle: headline(l),
    description: copy[l].welcomeText,
    url: `${SITE_URL}/${l}`,
    email: links.email,
    sameAs: [links.github, links.linkedin],
    knowsAbout: skillGroups.flatMap(g => g.tags),
  };
}

const languageInput = {
  type: 'object',
  properties: {
    language: {
      type: 'string',
      enum: ['en', 'pt'],
      description: 'Response language. Defaults to en.',
    },
  },
};

export function getAvailability(language?: string) {
  const l = lang(language);
  return {
    available: true,
    openTo:
      l === 'pt'
        ? ['Freelance / contrato', 'Tempo integral']
        : ['Freelance / contract', 'Full-time'],
    role: 'Senior Mobile Developer',
    languages: ['en', 'pt'],
    howToReach:
      l === 'pt'
        ? 'Use a ferramenta book_intro (nome, email, mensagem) ou escreva para ' +
          links.email
        : 'Use the book_intro tool (name, email, message) or write to ' +
          links.email,
  };
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Untrusted input from an agent: returns the clean intro or an error string.
export function parseIntro(input?: ToolInput): Intro | string {
  const name = input?.name?.trim() ?? '';
  const email = input?.email?.trim() ?? '';
  const message = input?.message?.trim() ?? '';
  if (!name || name.length > 100) return 'name is required (max 100 chars)';
  if (!EMAIL.test(email) || email.length > 200)
    return 'a valid email is required';
  if (!message || message.length > 2000)
    return 'message is required (max 2000 chars)';
  return { name, email, message };
}

// The tools an agent can call. `run` is data-in/data-out, so the same
// definitions back WebMCP in the browser and the MCP server on the Worker.
// `readOnly: false` tools have side effects and are only exposed remotely.
export const tools = [
  {
    name: 'get_resume',
    description:
      'Returns the resume and technical skills of João Pereira (Senior Mobile Developer) as JSON Resume: summary, skills, work history, contact links and CV URL.',
    inputSchema: languageInput,
    readOnly: true,
    run: (input?: ToolInput) => getResume(input?.language),
  },
  {
    name: 'get_projects',
    description:
      'Lists the mobile projects João Pereira has worked on, grouped by domain (fintech, social networking, delivery, live streaming), with what he built and the technologies used.',
    inputSchema: languageInput,
    readOnly: true,
    run: (input?: ToolInput) => getProjects(input?.language),
  },
  {
    name: 'check_availability',
    description:
      'Checks whether João Pereira (Senior Mobile Developer) is available for new work: freelance/contract or full-time, and how to reach him.',
    inputSchema: languageInput,
    readOnly: true,
    run: (input?: ToolInput) => getAvailability(input?.language),
  },
  {
    name: 'book_intro',
    description:
      'Sends an intro message, project proposal or contact request directly to João Pereira by email. He replies to the address you provide.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Who is reaching out.' },
        email: { type: 'string', description: 'Address João should reply to.' },
        message: {
          type: 'string',
          description: 'The intro, proposal or request (max 2000 chars).',
        },
      },
      required: ['name', 'email', 'message'],
    },
    readOnly: false,
    run: async (input?: ToolInput, ctx?: ToolContext) => {
      const intro = parseIntro(input);
      if (typeof intro === 'string') throw new Error(intro);
      if (!ctx?.deliver) {
        throw new Error(
          `book_intro is only available on the remote MCP server (${MCP_URL}). Email ${links.email} instead.`,
        );
      }
      await ctx.deliver(intro);
      return { sent: true, note: 'João will reply to ' + intro.email };
    },
  },
];
