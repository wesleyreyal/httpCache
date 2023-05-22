import React from 'react';
import { Form } from 'components/common/form/forms';
import { buttonType } from 'components/common/button';

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

const button: buttonType = {
  text: 'register',
  variant: 'success',
  wide: true,
};

const redirection = {
  text: 'Already have an account?',
  highlightText: 'Signin here',
  redirectionLink: '/signin',
};

const Register = () => (
  <Form title="Register" inputs={inputs} buttonProps={button} redirectionInformation={redirection} />
);

export default Register;
