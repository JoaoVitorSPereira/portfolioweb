import Link from 'next/link';
import { useRouter } from 'next/router';

import i18next from 'i18next';

import { languages } from '../../i18n/config';

import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiUsaFlag, GiBrazilFlag } from 'react-icons/gi';

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

const Header = lang => {
  const router = useRouter();
  // const { locale } = router;
  // const path = pathname.replace(/\[lang\]/i, lang);

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
            <NavLink>{i18next.t('projects')}</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>{i18next.t('skills')}</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>{i18next.t('about')}</NavLink>
          </Link>
        </li>
      </Div2>
      <LanguageDiv>
        {/* <Link href={pathname} as={path} prefetch={false}> */}
        <LanguageButtons
          onClick={() => {
            router.push('/en');
          }}
        >
          <GiUsaFlag size="30px" />
        </LanguageButtons>
        {/* </Link> */}
        {/* <Link href={pathname} as={path} prefetch={false}> */}
        <LanguageButtons
          style={{ marginLeft: 20 }}
          onClick={() => {
            router.push('/pt');
          }}
        >
          <GiBrazilFlag size="30px" />
        </LanguageButtons>
        {/* </Link> */}
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
