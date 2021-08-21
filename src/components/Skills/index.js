import React from 'react';
import { useRouter } from 'next/router';
import { DiReact } from 'react-icons/di';
import i18next from 'i18next';

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

const Skills = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>{i18next.t('skillsTitle')}</SectionTitle>
      <SectionText>{i18next.t('skillsDescription')}</SectionText>
      <List>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              {i18next.t('skillsExperience')} <br />
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
              {i18next.t('skillsExperience')} <br />
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
