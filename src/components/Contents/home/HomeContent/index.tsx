import { useRouter } from 'next/router';
import i18next from 'i18next';
import { IoChevronBack } from 'react-icons/io5';

import Phone from '@/components/Phone';
import { useScreenStack } from '@/hooks/useScreenStack';
import { isPt } from '@/lib/lang';
import About from './About';
import Contact from './Contact';
import HomeLauncher from './HomeLauncher';
import { menu, type ScreenId } from './menu';
import Projects from './Projects';
import Skills from './Skills';
import Statement from './Statement';
import {
  Avatar,
  BackButton,
  Bar,
  Greeting,
  HomeBody,
  HomeLayer,
  LangButton,
  LangSwitch,
  PageTitle,
  Root,
  ScreenBar,
  ScreenBody,
  ScreenLayer,
} from './styles';

const screens: Record<ScreenId, React.ComponentType> = {
  projects: Projects,
  skills: Skills,
  about: About,
  statement: Statement,
  contact: Contact,
};

const screenIds = menu.map(m => m.id);

// Content of HomeScreen: the phone, and inside it a launcher home. Every app
// screen slides in over it (like a nav stack) and stays in the DOM, hidden,
// so the content is still crawlable.
export default function HomeContent() {
  const { current, go } = useScreenStack(screenIds, 'home-screen');
  const router = useRouter();

  return (
    <Phone>
      <Root>
        <PageTitle>{i18next.t('seoTitle')}</PageTitle>
        <HomeLayer $pushed={current !== null} inert={current !== null}>
          <Bar>
            <Avatar>JP</Avatar>
            <Greeting>
              <strong>{i18next.t('hello')}</strong>
            </Greeting>
            <LangSwitch>
              <LangButton $active={!isPt()} onClick={() => router.push('/en')}>
                EN
              </LangButton>
              <LangButton $active={isPt()} onClick={() => router.push('/pt')}>
                PT
              </LangButton>
            </LangSwitch>
          </Bar>
          <HomeBody>
            <HomeLauncher open={go} />
          </HomeBody>
        </HomeLayer>

        {menu.map(({ id, key }) => {
          const Screen = screens[id];
          return (
            <ScreenLayer key={id} $open={current === id} inert={current !== id}>
              <ScreenBar>
                <BackButton aria-label="Back" onClick={() => go(null)}>
                  <IoChevronBack size="2.2rem" />
                </BackButton>
                <h2>{i18next.t(key)}</h2>
              </ScreenBar>
              <ScreenBody>
                <Screen />
              </ScreenBody>
            </ScreenLayer>
          );
        })}
      </Root>
    </Phone>
  );
}
