import React from 'react';
import { BaseButton } from '../button';
import { Title } from '../text';
import { EditFormItem } from './editFormItem';

export type EditFormType = {
  label: string;
  value?: string;
  type?: HTMLInputElement['type'];
  placeholder?: string;
};

type EditFormProps = {
  fields: ReadonlyArray<EditFormType>;
};

export const EditForm: React.FC<EditFormProps> = ({ fields }) => (
  <form action="" method="post" className="w-full flex flex-col max-w-lg gap-y-6 items-center">
    <Title title="My account" blueLine />
    {fields.map((field, idx) => (
      <EditFormItem {...field} key={idx} />
    ))}

    <div className="divider"></div>

    <EditFormItem label="password" type="password" placeholder="mysecretpassword" />
    <EditFormItem label="new password" type="password" placeholder="mynewsecretpassword" />
    <EditFormItem label="confirm password" type="password" placeholder="mynewsecretpassword" />

    <div className="w-full flex justify-between mt-6">
      <BaseButton text="cancel" wide outlined />
      <BaseButton text="save changes" className="" wide />
    </div>
  </form>
);
