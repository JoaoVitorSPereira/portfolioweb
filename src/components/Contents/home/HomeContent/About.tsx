import i18next from 'i18next';

import { getFaq } from '@/lib/agent';
import { Avatar, Card, ProfileHead, Text } from './styles';

export default function About() {
  return (
    <>
      <ProfileHead>
        <Avatar $large>JP</Avatar>
        <strong>{i18next.t('welcomeName')}</strong>
        <span>{i18next.t('welcomeDescription')}</span>
      </ProfileHead>
      <Card>
        <Text>{i18next.t('aboutCard1')}</Text>
        <Text>{i18next.t('aboutCard2')}</Text>
        <Text>{i18next.t('aboutCard3')}</Text>
      </Card>
      <Text>{i18next.t('aboutText1')}</Text>
      <Text>{i18next.t('aboutText2')}</Text>
      <Text>{i18next.t('aboutText3')}</Text>
      <Text as="h3">{i18next.t('faqTitle')}</Text>
      {getFaq(i18next.language).map(({ q, a }) => (
        <Card key={q}>
          <Text as="h4">{q}</Text>
          <Text>{a}</Text>
        </Card>
      ))}
    </>
  );
}
