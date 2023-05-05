import React from 'react';
import { InputBase } from '../input';

type buttonProps = {
  text: string;
  wide?: boolean;
  empty?: boolean;
  className?: string;
  isRed?: boolean;
};

export const Button: React.FC<buttonProps> = ({ text, wide, empty, className, isRed }) => {
  return (
    <InputBase
      type="submit"
      value={text}
      inputClassName={`
      ${className}
      font-semibold border-4
      ${wide ? 'px-9 py-2' : 'px-3 py-0 h-fit'}
      ${empty ? 'bg-eggshell' : isRed ? 'bg-red' : 'bg-argentinian_blue'}
      ${isRed ? 'border-red' : 'border-argentinian_blue'}
      ${!empty ? 'text-white' : isRed ? 'text-red' : 'text-argentinian_blue'}
      ${empty && isRed ? 'text-red' : 'text-argentinian_blue'}`}
    />
  );
};
