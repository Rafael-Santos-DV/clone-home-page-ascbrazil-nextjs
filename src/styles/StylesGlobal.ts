import { createGlobalStyle } from 'styled-components';

export const StylesGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        text-decoration: none;
    }

    html, body {
      width: 100%;
      height: 100vh;
      overflow-x: hidden;
    }


    @media only screen and (max-width: 990px) {

      html, body {
        overflow: auto;
      }

      .mobile-active {
        overflow: hidden;
      }
    }


`;
