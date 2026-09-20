import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import { IoChevronBack } from 'react-icons/io5';

import { isPt } from '../../lib/lang';
import About from './About';
import Contact from './Contact';
import Home from './Home';
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

// Home is the app's launcher; every screen slides in over it (like a nav stack)
// and stays in the DOM, hidden, so the content is still crawlable.
const BankApp = () => {
  const [current, setCurrent] = useState<ScreenId | null>(null);
  const router = useRouter();

  // Remember where the visitor was, so a reload resumes instead of resetting.
  const go = (id: ScreenId | null) => {
    setCurrent(id);
    try {
      if (id) sessionStorage.setItem('bank-screen', id);
      else sessionStorage.removeItem('bank-screen');
    } catch {}
  };

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('bank-screen');
      if (menu.some(m => m.id === saved)) setCurrent(saved as ScreenId);
    } catch {}
  }, []);

  return (
    <Root>
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
          <Home open={go} />
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
              <h1>{i18next.t(key)}</h1>
            </ScreenBar>
            <ScreenBody>
              <Screen />
            </ScreenBody>
          </ScreenLayer>
        );
      })}
    </Root>
  );
};

export default BankApp;
