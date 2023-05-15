import React from 'react';
import { AuthenticationForm } from './forms';

const inputs = [
  {
    placeholder: 'johndoe@example.com',
    label: 'mail',
    type: 'email',
  },
  {
    placeholder: 'mysecretpassword',
    label: 'password',
    type: 'password',
  },
];

const button = { text: 'signin', wide: true };

const redirection = {
  text: 'Don’t have an account ? ',
  highlightText: 'Register here',
  redirectionLink: '/register',
};

export const Signin: React.FC = () => (
  <AuthenticationForm
    title="Sign in"
    action=""
    inputs={inputs}
    buttonProps={button}
    redirectionInformation={redirection}
  />
);
