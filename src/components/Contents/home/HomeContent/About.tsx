import i18next from 'i18next';

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
    </>
  );
}
