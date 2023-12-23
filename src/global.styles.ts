import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body{
        overflow-x: hidden;
        font-family: IranSans;
        margin: 0;
        background-color: #1a1a1a;
    }

    html, body {
        overscroll-behavior: none;
    }

    a {
        text-decoration: underline;
        font-size: 1.5rem;
        color: #648CD0;
    }

    * {
        box-sizing: border-box;
        margin: 0;
    }

    p {
        font-size: 1.4rem;
        font-weight: 500;
    } 
    
    h5 {
        font-size: 1.8rem;
        font-weight: 600;
    }

    h4 {
        font-size: 2rem;
        font-weight: 700;
    } 
    
    h3 {
        font-size: 2.4rem;
        font-weight: 700;
    }

    h2 {
        font-size: 2.8rem;
        font-weight: 700;
    }

    h1 {
        font-size: 3.6rem;
        font-weight: 700;
    }

    button, div, label {
      user-select: none;
    } 


    *:focus { outline: none}
    input, textarea, button, select, a, div { -webkit-tap-highlight-color: rgba(0,0,0,0); }

    :root{
      /* --toastify-color-dark: rgba(20,20,20,0.9); */
    }
    
`;

export default GlobalStyle;
