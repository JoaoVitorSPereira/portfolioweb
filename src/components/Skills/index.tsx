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
      <SectionDivider $divider />
      <SectionTitle>{i18next.t('skillsTitle')}</SectionTitle>
      <SectionText>{i18next.t('skillsDescription')}</SectionText>
      <List>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Mobile</ListTitle>
            <ListParagraph>
              {i18next.t('skillsExperience')} <br />
              React Native, Expo, Expo Router, React Navigation, Zustand,
              Redux, Native SDK Integration, Biometrics, App Attest, Secure
              Storage, EAS Build/Update.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              {i18next.t('skillsExperience')} <br />
              TypeScript, JavaScript, React, Next.js, Three.js,
              Styled-Components, React Query.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Tooling & Practices</ListTitle>
            <ListParagraph>
              {i18next.t('skillsExperience')} <br />
              REST APIs, GraphQL, Firebase, Git, App Store Connect, Google
              Play Console, Figma, Postman.
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider $colorAlt />
    </Section>
  );
};

export default Skills;
