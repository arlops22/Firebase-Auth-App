import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--gray-primary)
    }

    html, body, #root {
        max-width: 100vw;
        max-height: 100vh;
    }

    *, input, button {
        border: none;
        background: none;
        outline: 0;

        font-family: Roboto, sans-serif;
    }

    html {
        background: var(--white);
    }

    :root {
        --orange-primary: #FECA29;
        --orange-secondary: #FFA409;
        --orange-dark: #F5820A;
        --gray-primary: #757575;
        --gray-secondary: #B4B3B4;
        --gray-tertiary: #EAEAEA;
        --gray-hover: #efefef;
        --white: #F5F5F5;
        --full-white: #FFFFFF;
        --blue: #039be5;
    }
`;

export const Container = styled.div `
    h1 {
        font-family: Ubuntu, sans-serif;
        margin: 1em 0;
        text-align: center;
    }
`;