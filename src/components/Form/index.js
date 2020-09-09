import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Form = styled.form `
    display: flex;
    flex-direction: column;
    width: 35%;
    margin: 0 auto;
    background-color: var(--full-white);
    padding: 1.5em;
    padding-bottom: 3em;

    img {
        width: 80px;
        margin: 0 auto;
        margin-bottom: 2em;
    }

    label {
        position: absolute;
        top: 10px;
        left: 10px;
        pointer-events: none;
        transition: all .2s ease-out;
    }

    input {
        border: 2px solid var(--gray-tertiary);
        border-bottom: 2px solid var(--orange-secondary);
        font-size: 1em;
        padding: 10px;
        transition: .2s;
        border-radius: 3px;

        &:focus, &:valid {
            border: 2px solid var(--orange-secondary);
        }

        &:focus ~ label, &:valid ~ label {
            color: var(--orange-secondary);
            background-color: var(--full-white);
            font-size: 0.75em;
            transform: translateY(calc((-10px) - 0.5em));
            padding: 0 5px;
        }
    }
`;

export const FormGroup = styled.div `
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 1.5em;
`;

export const InlineButtons = styled.div `
    display: flex;
    flex: 1;
    justify-content: center;
`;

export const Button = styled.button `
    background-color: var(--orange-primary);
    border-radius: 3px;
    padding: 12px;
    font: 400 1em Roboto, sans-serif;
    color: var(--full-white);
    cursor: pointer;
    width: 50%;
    margin-right: 8px;
    transition: .3s;

    &:hover {
        background-color: var(--orange-secondary);
    }
`;

export const ButtonSecondary = styled(Link) `
    background-color: var(--blue);
    color: var(--full-white);
    text-decoration: none;
    width: 50%;
    text-align: center;
    padding: 12px;
    border-radius: 3px;
    transition: .3s;
    opacity: 0.7;

    &:hover {
        opacity: 1;
    }
`;