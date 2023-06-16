import React from 'react';
import { NextPage } from 'next';
import { Title } from 'components/common/text';

const Register: NextPage = () => {
  return (
    <div className="container m-auto">
      <h1 id="heading-1">Heading 1</h1>
      <Title title="Profile" />
    </div>
  );
};

export default Register;
