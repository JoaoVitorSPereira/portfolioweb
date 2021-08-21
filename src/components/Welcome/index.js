import React from 'react';
import { useRouter } from 'next/router';
import i18next from 'i18next';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './styles';

const Welcome = props => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            {i18next.t('welcomeName')} <br />
            {i18next.t('welcomeDescription')}
          </SectionTitle>
          <SectionText>{i18next.t('welcomeText')}</SectionText>
          <a
            href={
              asPath === '/en'
                ? 'https://drive.google.com/file/d/1aE0m9cpyfxYdAY6VAPToFScY5EbLj6Hh/view?usp=sharing'
                : 'https://drive.google.com/file/d/1kGIk4POjCjSW9oHZaGcvZMMXJeVO1dYw/view?usp=sharing'
            }
            target="_blank"
          >
            <Button>{i18next.t('dataButton')}</Button>
          </a>
        </LeftSection>
      </Section>
    </>
  );
};

export default Welcome;
