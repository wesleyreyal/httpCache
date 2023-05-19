import React from 'react';
import { useIsAuth } from 'context';
import { redirect } from 'next/navigation';
import { RegisterForm } from 'components/user';
import { NextPage } from 'next';

const Register: NextPage = () => {
  const isAuthenticated = useIsAuth();

  if (isAuthenticated) {
    return redirect('/');
  }

  return <RegisterForm />;
};

export default Register;
