import React from 'react';
import { Form } from '../../common/form/forms';
import { buttonType } from '../../common/button';

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

const button: buttonType = {
  text: 'sign in',
  variant: 'success',
  wide: true,
};

const redirection = {
  text: 'No account yet?',
  highlightText: 'Create one',
  redirectionLink: '/register',
};

const Signin = () => <Form title="Sign in" inputs={inputs} buttonProps={button} redirectionInformation={redirection} />;

export default Signin;
