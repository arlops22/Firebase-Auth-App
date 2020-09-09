import React from 'react';
import { GlobalStyle, Container } from '../../assets/styles/globals';
import { Form, FormGroup, InlineButtons, Button, ButtonSecondary } from '../../components/Form';

import { app, appDB } from '../../base';
import history from '../../history';

import logo from '../../assets/img/firebase-icon.png';

function SignUp() {

  async function handleSignUp(e) {
    e.preventDefault();
    
    const { firstName, lastName, username, email, password } = e.target.elements;

    try {
      const res = await app.auth().createUserWithEmailAndPassword(
        email.value,
        password.value
      );

      appDB.collection('users').doc(res.user.uid).set({
        firstName: firstName.value,
        lastName: lastName.value,
        username: username.value
      });

      history.push('/');

    } catch(err) {

      alert(err);
    
    }
  }

  return (
    <>
    <GlobalStyle/>
    <Container>
        <h1>Sign Up</h1>
        <Form onSubmit={handleSignUp}>
          <img src={logo}/>

          <FormGroup>
            <input
              required 
              name="firstName"
              id="firstName"
              type="text"
            />
            <label>First Name:</label>
          </FormGroup>

          <FormGroup>
            <input 
              required
              name="lastName"
              id="lastName"
              type="text"
            />
            <label>Last Name:</label>
          </FormGroup>

          <FormGroup>
            <input 
              required
              name="username"
              id="username"
              type="text"
            />
            <label>Username:</label>
          </FormGroup>

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
            <Button>Sign Up</Button>
            <ButtonSecondary to="/login">Login</ButtonSecondary>
          </InlineButtons>
        </Form>
    </Container>
    </>
  );
}

export default SignUp;
