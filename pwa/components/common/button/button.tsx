import React from 'react';

type buttonProps = {
  text: string;
  onclick?: () => void;
  functionShowPopup?: () => void;
  wide?: boolean;
  empty?: boolean;
  className?: string;
  submit?: boolean;
  isRed?: boolean;
};

export const Button: React.FC<buttonProps> = ({
  text,
  onclick,
  functionShowPopup,
  wide,
  empty,
  className,
  submit,
  isRed,
}) => {
  const handleClick = () => {
    onclick?.();
  };

  return (
    <input
      type={submit ? 'submit' : 'button'}
      className={`btn rounded-sm font-bold w-fit border-4
      ${className ? className : ''}
      ${wide ? 'px-9 py-2' : 'px-3 py-0 h-fit'}
      ${empty ? 'bg-eggshell' : isRed ? 'bg-red' : 'bg-argentinian_blue'}
      ${isRed ? 'border-red' : 'border-argentinian_blue'}
      ${!empty ? 'text-white' : isRed ? 'text-red' : 'text-argentinian_blue'}
      ${empty && isRed ? 'text-red' : 'text-argentinian_blue'}`}
      onClick={handleClick}
      value={text}
    />
  );
};
