import { experiences, skillGroups, TimeLineData } from '../constants/constants';
import en from '../locales/en/translation.json';
import pt from '../locales/pt/translation.json';

// Single source of truth for everything an AI agent can read: the WebMCP tools
// (browser), the generated /resume.json, llms.txt and the JSON-LD in <head>.
export const SITE_URL = 'https://joaovitorspereira.github.io/portfolioweb';

export type Lang = 'en' | 'pt';
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
      career: TimeLineData.map(t => ({
        year: t.year,
        text: l === 'pt' ? t.textPT : t.text,
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

// The tools an agent can call. `run` is plain data-in/data-out, so the same
// definitions can back a server endpoint later.
export const tools = [
  {
    name: 'get_resume',
    description:
      'Returns the resume and technical skills of João Pereira (Senior Mobile Developer) as JSON Resume: summary, skills, work history, contact links and CV URL.',
    inputSchema: languageInput,
    run: (input?: { language?: string }) => getResume(input?.language),
  },
  {
    name: 'get_projects',
    description:
      'Lists the mobile projects João Pereira has worked on, grouped by domain (fintech, social networking, delivery, live streaming), with what he built and the technologies used.',
    inputSchema: languageInput,
    run: (input?: { language?: string }) => getProjects(input?.language),
  },
];
