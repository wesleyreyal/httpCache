import React from 'react';
import { AllowedVariant } from '../../../types';

type additionalTypes = { outlined?: boolean; text: string; variant?: AllowedVariant; wide?: boolean };
export type buttonType = additionalTypes &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const OutlinedButton: React.FC<buttonType> = (props) => (
  <BaseButton className={props.className} {...props} outlined />
);

export const computeClassFromProps = ({ variant, outlined, wide }: Omit<additionalTypes, 'text'>): string => {
  let classes = '';
  if (wide) {
    classes += 'px-9 py-2 ';
  } else {
    classes += 'px-3 py-0 h-fit';
  }

  if (outlined) {
    classes += 'bg-eggshell border-4 ';
    switch (variant) {
      case 'info':
        classes +=
          'border-argentinian_blue text-argentinian_blue bg-eggshell hover:bg-argentinian_blue hover:border-argentinian_blue hover:text-eggshell';
        break;
      case 'danger':
        classes += 'border-red text-red bg-eggshell hover:bg-red hover:border-red hover:text-white';
        break;
    }
  } else {
    classes += 'hover:bg-eggshell hover:border-eggshell';
    switch (variant) {
      case 'info':
        classes += ' bg-argentinian_blue border-argentinian_blue hover:text-argentinian_blue ';
        break;
      case 'danger':
        classes += ' bg-red border-red hover:text-red';
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
  ...props
}) => (
  <button
    type={type}
    className={`btn rounded-sm font-bold w-fit ${computeClassFromProps({ outlined, variant, wide })} ${className}`}
    {...props}
  >
    {text}
  </button>
);
