import React from 'react';
import { useRouter } from 'next/router';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './styles';

import en from '../../../public/locales/en';
import pt from '../../../public/locales/pt';

const Welcome = props => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pt;

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            {t.welcomeName} <br />
            {t.welcomeDescription}
          </SectionTitle>
          <SectionText>{t.welcomeText}</SectionText>
          <a
            href={
              locale === 'en'
                ? 'https://drive.google.com/file/d/1aE0m9cpyfxYdAY6VAPToFScY5EbLj6Hh/view?usp=sharing'
                : 'https://drive.google.com/file/d/1kGIk4POjCjSW9oHZaGcvZMMXJeVO1dYw/view?usp=sharing'
            }
            target="_blank"
          >
            <Button>{t.dataButton}</Button>
          </a>
        </LeftSection>
      </Section>
    </>
  );
};

export default Welcome;
