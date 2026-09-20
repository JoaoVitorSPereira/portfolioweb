import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  /* ${normalize}; */

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    height: 100%;
    overflow: hidden;
  }

  body {
    font-weight: 500;
    font-size: 1.6rem;
    background: #1f6fff;
    color: ${({ theme }) => theme.colors.primary1};
    cursor: default;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
