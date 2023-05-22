import React from 'react';
import { useIsAuth } from 'context';
import { redirect } from 'next/navigation';
import { SigninForm } from 'components/user';
import { NextPage } from 'next';

const Signin: NextPage = () => {
  const isAuthenticated = useIsAuth();

  if (isAuthenticated) {
    return redirect('/');
  }

  return <SigninForm />;
};

export default Signin;
