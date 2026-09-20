import i18next from 'i18next';

import { experiences } from '@/constants/constants';
import { isPt } from '@/lib/lang';
import { Chip, Chips, Label, Project, ProjectBody, Role, Text } from './styles';

export default function Projects() {
  return (
    <>
      {experiences.map(e => (
        <Project key={e.id}>
          <ProjectBody>
            <div>
              <h3>{isPt() ? e.titlePT : e.title}</h3>
              <Role>{isPt() ? e.rolePT : e.role}</Role>
            </div>
            {(isPt() ? e.paragraphsPT : e.paragraphs).map((p, i) => (
              <Text key={i}>{p}</Text>
            ))}
            <div>
              <Label>{i18next.t('keyTech')}</Label>
              <Chips style={{ margin: 0, padding: 0, border: 0 }}>
                {e.tags.map(t => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </Chips>
            </div>
          </ProjectBody>
        </Project>
      ))}
    </>
  );
}
