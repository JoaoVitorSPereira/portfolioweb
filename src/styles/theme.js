import { ThemeProvider } from 'styled-components';
import GraphicModel from '../components/GraphicBackgroundModel';

import theme from '../themes/default';
import GlobalStyles from './globals';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    {children}
  </ThemeProvider>
);

export default Theme;
