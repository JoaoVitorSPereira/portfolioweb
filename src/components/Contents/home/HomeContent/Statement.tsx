import { TimeLineData } from '@/constants/constants';
import { isPt } from '@/lib/lang';
import { Statement as Box, StatementRow } from './styles';

export default function Statement() {
  return (
    <Box>
      {[...TimeLineData].reverse().map(item => (
        <StatementRow key={item.year}>
          <strong>{item.year}</strong>
          <p>{isPt() ? item.textPT : item.text}</p>
        </StatementRow>
      ))}
    </Box>
  );
}
