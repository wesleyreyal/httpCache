import React from 'react';
import { BaseButton } from '../button';
import { Title } from '../text';
import { EditItem } from './editItem';

export type EditFormType = {
  label: string;
  value?: string;
  type?: HTMLInputElement['type'];
  placeholder?: string;
};

type EditFormProps = {
  fields: ReadonlyArray<EditFormType>;
};

export const EditInformation: React.FC<EditFormProps> = ({ fields }) => (
  <form action="" method="post" className="w-full flex flex-col max-w-lg gap-y-6 items-center">
    <Title title="My account" />
    {fields.map((field, idx) => (
      <EditItem {...field} key={idx} />
    ))}

    <div className="divider"></div>

    <EditItem label="password" type="password" placeholder="mysecretpassword" />
    <EditItem label="new password" type="password" placeholder="mynewsecretpassword" />
    <EditItem label="confirm password" type="password" placeholder="mynewsecretpassword" />

    <div className="w-full flex justify-between mt-6">
      <BaseButton text="cancel" wide outlined />
      <BaseButton text="save changes" className="" wide />
    </div>
  </form>
);
