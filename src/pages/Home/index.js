import React, { useContext } from 'react';

import { GlobalStyle } from '../../assets/styles/globals';
import { Container, Thumbnail, ProfileBox } from './styles';

import { Context } from '../../Context/authContext';

function Home() {
  const { signOut } = useContext(Context);

  return (
    <>
    <GlobalStyle/>
    <Container>
        <Thumbnail>
          <ProfileBox>
            <img />
            <h2>Ary Lopes</h2>
            <span>ary.lopes</span>
            <button onClick={signOut} >Sair</button>
          </ProfileBox>
        </Thumbnail>
    </Container>
    </>
  );
}

export default Home;
