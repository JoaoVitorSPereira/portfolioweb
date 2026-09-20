import Link from 'next/link';
import { useRouter } from 'next/router';

import i18next from 'i18next';

import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
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

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <Div1>
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', color: 'white' }}
        >
          <span style={{ fontSize: 26 }}>João Pereira.</span>
        </Link>
      </Div1>
      <Div2>
        <li>
          <NavLink href="#projects">{i18next.t('projects')}</NavLink>
        </li>
        <li>
          <NavLink href="#tech">{i18next.t('skills')}</NavLink>
        </li>
        <li>
          <NavLink href="#about">{i18next.t('about')}</NavLink>
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
