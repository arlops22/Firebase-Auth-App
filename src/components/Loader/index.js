import React from 'react';

import { GlobalStyle } from '../../assets/styles/globals';
import { Container, Load } from './style';
 
function Loader() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Load />
                <h2>Loading...</h2>
            </Container>
        </>
    );
}

export default Loader;
