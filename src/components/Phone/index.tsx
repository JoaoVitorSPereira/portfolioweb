import React, { useEffect, useRef, useState } from 'react';
import i18next from 'i18next';
import {
  IoBatteryFull,
  IoBriefcase,
  IoCellular,
  IoWifi,
} from 'react-icons/io5';

import { AppOpenContext } from './context';
import {
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

interface Props {
  children: React.ReactNode;
}

export default function Phone({ children }: Props) {
  const [booted, setBooted] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState('');
  const [origin, setOrigin] = useState('50% 20%');
  const screenRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = !!sessionStorage.getItem('booted');
      if (sessionStorage.getItem('phone-open')) setOpen(true);
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
      e.key === 'Escape' && setOpenSaved(false);
    window.addEventListener('keydown', onKey);
    return () => {
      clearInterval(id);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const setOpenSaved = (value: boolean) => {
    setOpen(value);
    try {
      if (value) sessionStorage.setItem('phone-open', '1');
      else sessionStorage.removeItem('phone-open');
    } catch {}
  };

  // The app zooms out of (and back into) the icon, like iOS.
  const openApp = () => {
    const s = screenRef.current?.getBoundingClientRect();
    const i = iconRef.current?.getBoundingClientRect();
    if (s && i) {
      setOrigin(
        `${i.left + i.width / 2 - s.left}px ${i.top + i.height / 2 - s.top}px`,
      );
    }
    setOpenSaved(true);
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

          <HomeScreen $open={open} $ready={booted} inert={open}>
            <AppIcon ref={iconRef} onClick={openApp}>
              <IconTile>
                <IoBriefcase size="3.4rem" />
              </IconTile>
              Portfolio
            </AppIcon>
            <Hint>{i18next.t('homeHint')}</Hint>
          </HomeScreen>

          <AppWindow
            $open={open}
            inert={!open}
            style={{ transformOrigin: origin }}
          >
            <AppOpenContext.Provider value={open}>
              {children}
            </AppOpenContext.Provider>
          </AppWindow>

          <HomeIndicator
            aria-label="Home"
            onClick={() => setOpenSaved(false)}
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
