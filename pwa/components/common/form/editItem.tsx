import React from 'react';
import { InputBase } from '../input';

type editFormItemType = {
  value?: string;
  label: string;
  type?: string;
  placeholder?: string;
};
export const EditItem: React.FC<editFormItemType> = ({ value, label, ...props }) => (
  <div className="flex justify-between items-center w-full">
    <div className="text-xl">{label}</div>
    <InputBase defaultValue={value} {...props} />
  </div>
);
