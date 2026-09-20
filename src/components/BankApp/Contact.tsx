import i18next from 'i18next';
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';

import { ContactRow } from './styles';

const contacts = [
  {
    href: 'mailto:joaovitorspereira@gmail.com',
    title: 'joaovitorspereira@gmail.com',
    label: 'Email',
    Icon: IoMail,
  },
  {
    href: 'https://github.com/JoaoVitorSPereira',
    title: 'GitHub',
    label: 'JoaoVitorSPereira',
    Icon: IoLogoGithub,
  },
  {
    href: 'https://www.linkedin.com/in/joaovitorspereira/',
    title: 'LinkedIn',
    label: 'joaovitorspereira',
    Icon: IoLogoLinkedin,
  },
];

const Contact = () => (
  <>
    {contacts.map(({ href, title, label, Icon }) => (
      <ContactRow
        key={href}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
      >
        <span>
          <Icon size="2rem" />
        </span>
        <div>
          <strong>{title}</strong>
          <small>{label}</small>
        </div>
      </ContactRow>
    ))}
  </>
);

export default Contact;
