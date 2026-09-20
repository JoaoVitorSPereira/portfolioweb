import React from 'react';
import i18next from 'i18next';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './styles';

const Welcome = () => {
  return (
    <>
      <Section $row $nopadding>
        <LeftSection>
          <SectionTitle $main>
            {i18next.t('welcomeName')} <br />
            {i18next.t('welcomeDescription')}
          </SectionTitle>
          <SectionText>{i18next.t('welcomeText')}</SectionText>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cvfolder/JoaoPereira_CV.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            <Button>{i18next.t('dataButton')}</Button>
          </a>
        </LeftSection>
      </Section>
    </>
  );
};

export default Welcome;
