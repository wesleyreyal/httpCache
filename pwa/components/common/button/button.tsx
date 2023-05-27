import React from 'react';
import { AllowedVariant } from 'types';

type additionalTypes = { text: string; variant?: AllowedVariant; wide?: boolean };
export type buttonType = additionalTypes &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const OutlinedButton: React.FC<buttonType> = (props) => (
  <BaseButton className={`btn-outline ${props.className}`} {...props} />
);

export const computeClassFromProps = ({ variant, wide }: Omit<additionalTypes, 'text'>): string => {
  let classes = wide ? 'btn-wide ' : '';

  switch (variant) {
    case 'info':
      classes += 'btn-info';
      break;
    case 'danger':
      classes += 'btn-error';
      break;
    case 'success':
      classes += 'btn-success';
      break;
    case 'warning':
      classes += 'btn-warning';
      break;
    case 'ghost':
      classes += 'btn-ghost';
      break;
  }
  return classes;
};

export const BaseButton: React.FC<buttonType> = ({ variant = 'info', wide, text, type, className = '', ...props }) => (
  <button
    type={type}
    className={`btn font-bold w-fit ${computeClassFromProps({ variant, wide })} ${className}`}
    {...props}
  >
    {text}
  </button>
);
