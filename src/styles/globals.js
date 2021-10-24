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
    scroll-behavior: smooth
  }

  /* @font-face {
    font-family: 'MADEMirage';
    src: url('/fonts/MADE_Mirage_Regular.otf') format('otf');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  } */
  body {
    font-family: 'MADEMirage' ;
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title}, sans-serif;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
