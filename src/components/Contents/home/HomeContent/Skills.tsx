import i18next from 'i18next';
import { IoConstruct, IoLaptop, IoPhonePortrait } from 'react-icons/io5';

import { skillGroups } from '@/constants/constants';
import { BigCard, BigChips, Text } from './styles';

const icons = [IoPhonePortrait, IoLaptop, IoConstruct];

export default function Skills() {
  return (
    <>
      <Text>{i18next.t('skillsDescription')}</Text>
      {skillGroups.map((g, i) => {
        const Icon = icons[i % icons.length];
        return (
          <BigCard key={g.title}>
            <h3>
              <Icon size="2.2rem" />
              {g.title}
            </h3>
            <BigChips>
              {g.tags.map(t => (
                <li key={t}>{t}</li>
              ))}
            </BigChips>
          </BigCard>
        );
      })}
    </>
  );
}
