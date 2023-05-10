import React from 'react';
import { EditFormType } from '../components/common/form';
import { subdomainProps } from '../components/common/collapse/';
import { Footer } from '../components/common/footer';

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

const tabsName = ['json', 'caddyfile', 'user-friendly'];
const Welcome = () => {
  return (
    <>
      <Footer />
    </>
  );
};
export default Welcome;
