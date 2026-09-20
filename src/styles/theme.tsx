import { ThemeProvider } from 'styled-components';

import FragmentsBackground from '../components/FragmentsBackground';
import theme from '../themes/default';
import GlobalStyles from './globals';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <FragmentsBackground />

    {children}
  </ThemeProvider>
);

export default Theme;
