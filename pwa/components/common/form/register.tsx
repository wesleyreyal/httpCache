import React from 'react';
import { AuthenticationForm } from './forms';

const inputs = [
  {
    placeholder: 'johndoe@example.com',
    label: 'mail',
    type: 'email',
  },
  {
    placeholder: 'john',
    label: 'firstname',
    type: 'text',
  },
  {
    placeholder: 'doe',
    label: 'lastname',
    type: 'text',
  },
  {
    placeholder: 'vinvin corp',
    label: 'company',
    type: 'text',
    optional: true,
  },
  {
    placeholder: 'mysecretpassword',
    label: 'password',
    type: 'password',
  },
  {
    placeholder: 'mysecretpassword',
    label: 'confirm password',
    type: 'password',
  },
];

const button = {
  text: 'register',
  wide: true,
};

const redirection = {
  text: 'Already have an account ? ',
  highlightText: 'Signin here',
  redirectionLink: '/signin',
};

export const Register: React.FC = () => (
  <AuthenticationForm title="Register" inputs={inputs} buttonProps={button} redirectionInformation={redirection} />
);
