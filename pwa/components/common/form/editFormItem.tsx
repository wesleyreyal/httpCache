import React from 'react';
import { InputBase } from '../input';

type editFormItemType = {
  value?: string;
  label: string;
  type?: string;
  placeholder?: string;
};
export const EditFormItem: React.FC<editFormItemType> = ({ value, label, type, placeholder }) => (
  <div className="flex justify-between items-center w-full">
    <div className="text-xl">{label}</div>
    <InputBase defaultValue={value} placeholder={placeholder} type={type ? type : 'text'} />
  </div>
);
