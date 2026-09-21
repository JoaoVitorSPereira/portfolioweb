import i18next from 'i18next';
import { IoDocumentText, IoLogoMarkdown, IoServer } from 'react-icons/io5';

import { MCP_URL, getPageMarkdown } from '@/lib/agent';
import { isPt } from '@/lib/lang';
import {
  ContactRow,
  HomeLayer,
  Markdown,
  Root,
  ScreenBar,
  ScreenBody,
  Text,
} from './styles';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

// The "AI" app on the phone: the portfolio the way an AI agent reads it.
export default function AiApp() {
  const l = isPt() ? 'pt' : 'en';
  const links = [
    {
      href: `${prefix}/${l}.md`,
      title: `${l}.md`,
      label: 'Markdown',
      Icon: IoLogoMarkdown,
    },
    {
      href: `${prefix}/llms.txt`,
      title: 'llms.txt',
      label: 'LLM index',
      Icon: IoDocumentText,
    },
    {
      href: `${prefix}/${l === 'pt' ? 'resume.pt' : 'resume'}.json`,
      title: l === 'pt' ? 'resume.pt.json' : 'resume.json',
      label: 'JSON Resume',
      Icon: IoDocumentText,
    },
    {
      href: MCP_URL,
      title: 'MCP server',
      label: 'get_resume · get_projects · check_availability · book_intro',
      Icon: IoServer,
    },
  ];

  return (
    <Root>
      <HomeLayer $pushed={false}>
        <ScreenBar>
          <h2>{i18next.t('aiTitle')}</h2>
        </ScreenBar>
        <ScreenBody>
          <Text>{i18next.t('aiIntro')}</Text>
          <Markdown>{getPageMarkdown(l)}</Markdown>
          {links.map(({ href, title, label, Icon }) => (
            <ContactRow key={href} href={href} target="_blank" rel="noreferrer">
              <span>
                <Icon size="2rem" />
              </span>
              <div>
                <strong>{title}</strong>
                <small>{label}</small>
              </div>
            </ContactRow>
          ))}
        </ScreenBody>
      </HomeLayer>
    </Root>
  );
}
