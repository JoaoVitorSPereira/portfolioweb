import React from 'react';
import { useRouter } from 'next/router';
import i18next from 'i18next';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './styles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>{i18next.t('projectsTitle')}</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">
                {asPath === '/en' ? p.description : p.descriptionPT}
              </CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                {p.visit === '' ? null : (
                  <ExternalLinks href={p.visit}>
                    {i18next.t('moreButton')}
                  </ExternalLinks>
                )}

                {p.source === '' ? null : (
                  <ExternalLinks href={p.source}>
                    {i18next.t('sourceButton')}
                  </ExternalLinks>
                )}
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
