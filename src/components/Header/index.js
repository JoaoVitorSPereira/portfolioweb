import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiUsaFlag, GiBrazilFlag } from 'react-icons/gi';

import en from '../../../public/locales/en';
import pt from '../../../public/locales/pt';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  LanguageDiv,
  LanguageButtons,
} from './styles';

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pt;

  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
            <span style={{ fontSize: 26 }}>João Pereira.</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>{t.projects}</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>{t.skills}</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>{t.about}</NavLink>
          </Link>
        </li>
      </Div2>
      <LanguageDiv>
        <LanguageButtons
          onClick={() => {
            router.push(router.pathname, router.asPath, { locale: 'en' });
          }}
        >
          <GiUsaFlag size="30px" />
        </LanguageButtons>
        <LanguageButtons
          style={{ marginLeft: 20 }}
          onClick={() => {
            router.push(router.pathname, router.asPath, { locale: 'pt' });
          }}
        >
          <GiBrazilFlag size="30px" />
        </LanguageButtons>
      </LanguageDiv>
      <Div3>
        <SocialIcons
          href="https://github.com/JoaoVitorSPereira"
          target="_blank"
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/joaovitorspereira/"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
