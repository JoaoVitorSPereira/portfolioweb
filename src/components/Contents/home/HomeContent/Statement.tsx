import i18next from 'i18next';

import { highlights, timeline } from '@/constants/constants';
import { isPt } from '@/lib/lang';
import {
  Highlight,
  Statement as Box,
  StatementHeading,
  StatementRow,
} from './styles';

export default function Statement() {
  return (
    <>
      <Box>
        {timeline.map(item => (
          <StatementRow key={item.year}>
            <strong>{item.year}</strong>
            <div>
              <h3>{isPt() ? item.titlePT : item.title}</h3>
              {(isPt() ? item.paragraphsPT : item.paragraphs).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </StatementRow>
        ))}
      </Box>

      <div>
        <StatementHeading>{i18next.t('builtTitle')}</StatementHeading>
        {highlights.map(h => (
          <Highlight key={h.title}>
            <h3>{isPt() ? h.titlePT : h.title}</h3>
            <p>{isPt() ? h.textPT : h.text}</p>
          </Highlight>
        ))}
      </div>
    </>
  );
}
