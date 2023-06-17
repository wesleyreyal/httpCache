import React from 'react';
import { AllowedVariant } from 'types';
import { AllowedIcons, Icon } from '../icon';

type buttonIcon = { icon: AllowedIcons; position: 'left' | 'right' };
type buttonText = { text?: string };
type additionalTypes = { variant?: AllowedVariant } & (buttonText | (buttonText & buttonIcon) | buttonIcon);
export type buttonType = additionalTypes &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const OutlinedButton: React.FC<buttonType> = (props) => (
  <BaseButton {...props} className={`btn-outline ${props.className}`} />
);

export const computeClassFromProps = ({ variant }: Omit<additionalTypes, 'text'>): string => {
  switch (variant) {
    case 'info':
      return 'btn-info';
    case 'danger':
      return 'btn-error';
    case 'success':
      return 'btn-success';
    case 'warning':
      return 'btn-warning';
    case 'ghost':
      return 'btn-ghost';
  }

  return '';
};

export const BaseButton: React.FC<buttonType> = ({ variant = 'info', type, className = '', ...props }) => (
  <button type={type} className={`btn ${computeClassFromProps({ variant })} ${className}`} {...props}>
    {(props as buttonIcon).icon ? <Icon name={(props as buttonIcon).icon} className="text-inherit" size={24} /> : null}
    {(props as buttonText).text ?? ''}
  </button>
);
