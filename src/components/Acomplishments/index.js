import React from 'react';
import { useRouter } from 'next/router';

import i18next from 'i18next';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './styles';

const data = [
  {
    number: 1000,
    text: 'Hours spent in RPGs. (most of them are Final Fantasy 🐉⚔️)',
    textPT: 'Horas gastas em RPGs. (a maioria deles é Final Fantasy 🐉⚔️)',
  },
  {
    number: 500,
    text: 'Hours studying with lo-fi 24/7 playlist on. 🎧💻🤓',
    textPT: 'Horas de estudo com lista de reprodução lo-fi 24/7. 🎧💻🤓',
  },
  {
    number: 5,
    text: 'Github Followers. 😅',
    textPT: 'Seguidores no Github. 😅',
  },
  {
    number: 1000,
    text: 'Hours dealing and solving bugs.💻',
    textPT: 'Horas lidando e resolvendo bugs.💻',
  },
];

const Acomplishments = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <Section>
      <SectionTitle>{i18next.t('personalTitle')}</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{asPath === '/en' ? card.text : card.textPT}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;
