import styled from 'styled-components';

export const Container = styled.div `
    text-align: center;

    h1 {
        font-family: Ubuntu, sans-serif;
        margin: 1em 0;
    }
`;

export const Thumbnail = styled.div `
    width: 100%;
    height: calc(100vh / 3);
    background-color: var(--gray-primary);
    position: relative;
`;

export const ProfileBox = styled.div `
    position: absolute;
    bottom: calc(-60px - 2em - 1em - 0.875em);
    left: calc(50% - 60px);

    img {
        border-radius: 50%;
        height: 120px;
        width: 120px;
        background-color: var(--gray-tertiary);
    }

    button {
        cursor: pointer;
        display: block;
        margin: 0 auto;
        color: var(--orange-dark);
        padding: 5px;
        font-size: 0.875em;

        &:hover {
            text-decoration: underline;
        }
    }
`;