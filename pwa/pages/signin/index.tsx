import React from 'react';
import { useRedirectIfLogged } from 'context';
import { SigninForm } from 'components/user';
import { NextPage } from 'next';

const Signin: NextPage = () => {
  useRedirectIfLogged();

  return <SigninForm />;
};

export default Signin;
