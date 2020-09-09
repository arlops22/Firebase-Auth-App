import React from 'react';
import { GlobalStyle, Container } from '../../assets/styles/globals';
import { Form, FormGroup, InlineButtons, Button, ButtonSecondary } from '../../components/Form';

import { app } from '../../base';
import history from '../../history';

import logo from '../../assets/img/firebase-icon.png';

function Login() {

  async function handleLogin(e) {
    e.preventDefault();
    
    const { email, password } = e.target.elements;

    try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
    } catch(err) {
        alert(err)
    }
}

  return (
    <>
    <GlobalStyle/>
    <Container>
        <h1>Login</h1>
        <Form onSubmit={handleLogin}>
          <img src={logo}/>

          <FormGroup>
            <input 
              required
              name="email"
              id="email"
              type="text"
            />
            <label>E-mail:</label>
          </FormGroup>

          <FormGroup>
            <input 
              required
              name="password"
              id="password"
              type="password"
            />
            <label>Password:</label>
          </FormGroup>

          <InlineButtons>
            <Button>Login</Button>
            <ButtonSecondary to="/signup">Sign Up</ButtonSecondary>
          </InlineButtons>
        </Form>
    </Container>
    </>
  );
}

export default Login;
