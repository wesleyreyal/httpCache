import React from 'react';
import { EditInformation, EditFormType, Register, Signin } from '../components/common/form';
import { CollapseBlock, subdomainProps } from '../components/common/collapse/';

const editFormFields: EditFormType[] = [
  {
    label: 'firstname',
    value: 'John',
  },
  {
    label: 'lastname',
    value: 'doe',
  },
  {
    label: 'mail',
    value: 'johndoe@example.com',
    type: 'email',
  },
  {
    label: 'company',
    placeholder: 'vinvin corp',
  },
];

const config: subdomainProps[] = [
  {
    ip: '127.0.0.1',
    zone: 'www',
  },
  {
    ip: '127.0.0.1',
    zone: 'www',
  },
  {
    ip: '127.0.0.1',
    zone: 'www',
  },
  {
    ip: '127.0.0.1',
    zone: 'www',
  },
];
const Welcome = () => {
  return (
    <>
      <Signin />
      <CollapseBlock number={1} name="google.com" configurations={config} />
      <Register />
      <EditInformation fields={editFormFields} />
    </>
  );
};
export default Welcome;
