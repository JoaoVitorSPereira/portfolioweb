import React from 'react';
import { useRouter } from 'next/router';

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

import en from '../../../public/locales/en';
import pt from '../../../public/locales/pt';

const Projects = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pt;

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>{t.projectsTitle}</SectionTitle>
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
                {locale === 'en' ? p.description : p.descriptionPT}
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
                  <ExternalLinks href={p.visit}>{t.moreButton}</ExternalLinks>
                )}

                {p.source === '' ? null : (
                  <ExternalLinks href={p.source}>
                    {t.sourceButton}
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
