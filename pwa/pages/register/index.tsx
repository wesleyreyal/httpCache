import React from 'react';
import { RegisterForm } from 'components/user';
import { NextPage } from 'next';
import { useRedirectIfLogged } from 'context';

const Register: NextPage = () => {
  useRedirectIfLogged();

  return <RegisterForm />;
};

export default Register;
