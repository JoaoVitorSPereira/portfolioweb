import { ThemeProvider } from 'styled-components';

import FragmentsBackground from '@/components/FragmentsBackground';
import theme from '@/themes/default';
import GlobalStyles from './globals';

interface Props {
  children: React.ReactNode;
}

export default function Theme({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FragmentsBackground />

      {children}
    </ThemeProvider>
  );
}
