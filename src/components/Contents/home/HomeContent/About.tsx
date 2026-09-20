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
        <Text>{i18next.t('welcomeText')}</Text>
      </Card>
      <Text>{i18next.t('aboutText')}</Text>
    </>
  );
}
