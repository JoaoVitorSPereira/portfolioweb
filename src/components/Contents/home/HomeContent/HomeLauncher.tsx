import { useContext, useState } from 'react';
import i18next from 'i18next';
import {
  IoChevronForward,
  IoDocumentText,
  IoEye,
  IoEyeOff,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from 'react-icons/io5';

import { AppOpenContext } from '@/components/Phone/context';
import { menu, type ScreenId } from './menu';
import {
  Action,
  Actions,
  Chevron,
  Chip,
  Chips,
  Eye,
  Hero,
  HeroRole,
  HeroTop,
  HeroValue,
  Menu,
  MenuIcon,
  MenuItem,
  SectionLabel,
} from './styles';

interface Props {
  open: (screen: ScreenId) => void;
}

export default function HomeLauncher({ open }: Props) {
  const [hidden, setHidden] = useState(false);
  const appOpen = useContext(AppOpenContext);

  return (
    <>
      <Hero>
        <HeroTop>
          {i18next.t('expLabel')}
          <Eye
            aria-label="Toggle"
            onClick={() => setHidden(h => !h)}
            type="button"
          >
            {hidden ? <IoEyeOff size="1.8rem" /> : <IoEye size="1.8rem" />}
          </Eye>
        </HeroTop>
        <HeroValue>{hidden ? '•••••' : i18next.t('expValue')}</HeroValue>
        <HeroRole>{i18next.t('welcomeDescription')}</HeroRole>
        <Chips>
          <Chip $solid>{i18next.t('appsShipped')}</Chip>
          <Chip>Fintech</Chip>
          <Chip>Social</Chip>
          <Chip>Logistics</Chip>
        </Chips>
      </Hero>

      <Actions>
        <Action
          href="/cvfolder/JoaoPereira_CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <IoDocumentText size="2.4rem" />
          </span>
          {i18next.t('quickCv')}
        </Action>
        <Action
          href="https://github.com/JoaoVitorSPereira"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <IoLogoGithub size="2.4rem" />
          </span>
          GitHub
        </Action>
        <Action
          href="https://www.linkedin.com/in/joaovitorspereira/"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <IoLogoLinkedin size="2.4rem" />
          </span>
          LinkedIn
        </Action>
        <Action href="mailto:joaovitorspereira@gmail.com">
          <span>
            <IoMail size="2.4rem" />
          </span>
          {i18next.t('quickMail')}
        </Action>
      </Actions>

      <div>
        <SectionLabel>{i18next.t('exploreTitle')}</SectionLabel>
        <Menu>
          {menu.map(({ id, key, Icon }, i) => (
            <MenuItem key={id} $i={i} $in={appOpen} onClick={() => open(id)}>
              <MenuIcon>
                <Icon size="2.2rem" />
              </MenuIcon>
              <span>{i18next.t(key)}</span>
              <Chevron>
                <IoChevronForward size="1.8rem" />
              </Chevron>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
}
