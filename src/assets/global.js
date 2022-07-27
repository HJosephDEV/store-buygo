import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    color: #000;
    }

    body {
        background-color: #111;
    }

    #root {
        width: 1024px;
        margin: 0 auto;
    }

    .link
    {
        text-decoration: none;
    }

    @media only screen and (max-width: 1024px) {
        #root {
            width: 100%;
        }

    }
`;

export default GlobalStyle;
