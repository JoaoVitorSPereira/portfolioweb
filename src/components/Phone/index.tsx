import React, { useEffect, useRef, useState } from 'react';
import i18next from 'i18next';
import { IoBatteryFull, IoCellular, IoWifi } from 'react-icons/io5';

import { AppOpenContext } from './context';
import {
  AppGrid,
  AppIcon,
  AppWindow,
  Boot,
  BootBar,
  BootMark,
  Frame,
  HomeIndicator,
  HomeScreen,
  Hint,
  IconTile,
  Island,
  Screen,
  Stage,
  StatusBar,
  StatusIcons,
} from './styles';

const BOOT_MS = 2400;

export interface PhoneApp {
  id: string;
  label: string;
  // What the icon tile shows (initials or an icon) and, optionally, its background.
  tile: React.ReactNode;
  background?: string;
  children: React.ReactNode;
}

interface Props {
  apps: PhoneApp[];
}

// A phone home screen with one icon per app. Every app stays in the DOM,
// hidden while closed, so the content is still crawlable.
export default function Phone({ apps }: Props) {
  const [booted, setBooted] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [time, setTime] = useState('');
  const [origin, setOrigin] = useState('50% 20%');
  const screenRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    let seen = false;
    try {
      seen = !!sessionStorage.getItem('booted');
      const saved = sessionStorage.getItem('phone-open');
      // '1' is the old flag from when the phone had a single app.
      const id =
        apps.find(a => a.id === saved)?.id ?? (saved ? apps[0].id : null);
      if (id) setOpen(id);
    } catch {}
    if (seen) return setBooted(true);

    const id = setTimeout(() => {
      setBooted(true);
      try {
        sessionStorage.setItem('booted', '1');
      } catch {}
    }, BOOT_MS);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(`${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`);
    };
    tick();
    const id = setInterval(tick, 20000);
    const onKey = (e: KeyboardEvent) =>
      e.key === 'Escape' && setOpenSaved(null);
    window.addEventListener('keydown', onKey);
    return () => {
      clearInterval(id);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const setOpenSaved = (id: string | null) => {
    setOpen(id);
    try {
      if (id) sessionStorage.setItem('phone-open', id);
      else sessionStorage.removeItem('phone-open');
    } catch {}
  };

  // The app zooms out of (and back into) the icon, like iOS.
  const openApp = (id: string) => {
    const s = screenRef.current?.getBoundingClientRect();
    const i = iconRefs.current[id]?.getBoundingClientRect();
    if (s && i) {
      setOrigin(
        `${i.left + i.width / 2 - s.left}px ${i.top + i.height / 2 - s.top}px`,
      );
    }
    setOpenSaved(id);
  };

  return (
    <Stage>
      <Frame>
        <Screen ref={screenRef}>
          <Island />
          <StatusBar>
            <span>{time}</span>
            <StatusIcons>
              <IoCellular size="1.7rem" />
              <IoWifi size="1.7rem" />
              <IoBatteryFull size="2.4rem" />
            </StatusIcons>
          </StatusBar>

          <HomeScreen
            $open={open !== null}
            $ready={booted}
            inert={open !== null}
          >
            <AppGrid>
              {apps.map(app => (
                <AppIcon
                  key={app.id}
                  ref={el => {
                    iconRefs.current[app.id] = el;
                  }}
                  onClick={() => openApp(app.id)}
                >
                  <IconTile $background={app.background}>{app.tile}</IconTile>
                  {app.label}
                </AppIcon>
              ))}
            </AppGrid>
            <Hint>{i18next.t('homeHint')}</Hint>
          </HomeScreen>

          {apps.map(app => (
            <AppWindow
              key={app.id}
              $open={open === app.id}
              inert={open !== app.id}
              style={{ transformOrigin: origin }}
            >
              <AppOpenContext.Provider value={open === app.id}>
                {app.children}
              </AppOpenContext.Provider>
            </AppWindow>
          ))}

          <HomeIndicator
            aria-label="Home"
            onClick={() => setOpenSaved(null)}
            tabIndex={open ? 0 : -1}
          />

          <Boot $done={booted} aria-hidden={booted}>
            <BootMark>JP</BootMark>
            <BootBar />
          </Boot>
        </Screen>
      </Frame>
    </Stage>
  );
}
