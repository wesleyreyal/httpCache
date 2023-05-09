import React from 'react';

type variant = 'info' | 'warning';

type additionalTypes = { outlined?: boolean; text: string; variant?: variant; wide?: boolean; onclick?: () => void };
type buttonType = additionalTypes &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const OutlinedButton: React.FC<buttonType> = (props) => (
  <BaseButton className={props.className} {...props} outlined />
);

export const computeClassFromProps = ({ variant, outlined, wide }: Omit<additionalTypes, 'text'>): string => {
  let classes = 'btn rounded-md font-bold ';
  if (wide) {
    classes += 'px-9 py-2 ';
  } else {
    classes += 'px-3 py-0 h-fit';
  }

  if (outlined) {
    classes += 'bg-eggshell border-4 ';
    switch (variant) {
      case 'info':
        classes += 'border-argentinian_blue text-argentinian_blue bg-eggshell ';
        break;
      case 'warning':
        classes += 'border-red text-red bg-eggshell ';
        break;
    }
  } else {
    switch (variant) {
      case 'info':
        classes += ' bg-argentinian_blue border-argentinian_blue';
        break;
      case 'warning':
        classes += ' bg-red border-red';
        break;
    }
  }
  return classes;
};

export const BaseButton: React.FC<buttonType> = ({
  variant = 'info',
  outlined,
  wide,
  text,
  type = 'button',
  className = '',
  onclick,
}) => {
  return (
    <button
      type={type}
      className={`btn rounded-sm font-bold ${computeClassFromProps({ outlined, variant, wide })} ${className}`}
      onClick={onclick}
    >
      {text}
    </button>
  );
};
