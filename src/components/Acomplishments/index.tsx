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
    number: 5,
    text: 'Years shipping production React Native apps. 📱',
    textPT: 'Anos entregando apps React Native em produção. 📱',
  },
  {
    number: 10,
    text: 'Apps published to the App Store & Google Play. 🚀',
    textPT: 'Apps publicados na App Store & Google Play. 🚀',
  },
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
