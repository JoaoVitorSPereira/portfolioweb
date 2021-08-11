import React from 'react';
import { useRouter } from 'next/router';
import { DiReact } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './styles';

import en from '../../../public/locales/en';
import pt from '../../../public/locales/pt';

const Skills = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pt;
  return (
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>{t.skillsTitle}</SectionTitle>
      <SectionText>{t.skillsDescription}</SectionText>
      <List>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              {t.skillsExperience} <br />
              HTML, CSS, JavaScript, React.js, NextJS, ThreeJS, Typescript,
              Styled-Components.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Mobile</ListTitle>
            <ListParagraph>
              {t.skillsExperience} <br />
              React-Native.
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider colorAlt />
    </Section>
  );
};

export default Skills;
