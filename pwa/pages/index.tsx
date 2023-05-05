import React from 'react';
import { EditForm, EditFormType } from '../components/common/form';

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
const Welcome = () => <EditForm fields={editFormFields} />;
export default Welcome;
