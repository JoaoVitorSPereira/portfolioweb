import React from 'react';
import { useRouter } from 'next/router';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './styles';

import en from '../../../public/locales/en';
import pt from '../../../public/locales/pt';

const data = [
  {
    number: 1000,
    text: 'Hours spent in RPGs. (most of them are final fantasy)',
    textPT: 'Horas gastas em RPGs. (a maioria deles é final fantasy)',
  },
  {
    number: 500,
    text: 'Hours studying with lo-fi 24/7 playlist on.',
    textPT: 'Horas de estudo com lista de reprodução lo-fi 24/7.',
  },
  {
    number: 5,
    text: 'Github Followers...:D',
    textPT: 'Seguidores no Github....:D',
  },
  {
    number: 1000,
    text: 'Hours dealing and solving bugs',
    textPT: 'Horas lidando e resolvendo bugs.',
  },
];

const Acomplishments = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pt;

  return (
    <Section>
      <SectionTitle>{t.personalTitle}</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{locale === 'en' ? card.text : card.textPT}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;
