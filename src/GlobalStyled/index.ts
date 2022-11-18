import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', 'sans-serif';
  }

  body{
    width: 100%;
    height: 100vh;

    background-color: #000000;
  }
`;

export default GlobalStyled;
