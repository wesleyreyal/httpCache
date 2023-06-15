import React from 'react';
import { AllowedVariant } from 'types';
import { AllowedIcons, AllowedSize, Icon } from 'components/common/icon';

type buttonIcon = { icon: AllowedIcons; position: 'left' | 'right'; color: string; size: AllowedSize };
type buttonText = { text?: string };
type additionalTypes = { variant?: AllowedVariant; wide?: boolean } & (
  | buttonText
  | (buttonText & buttonIcon)
  | buttonIcon
);
export type buttonType = additionalTypes &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const OutlinedButton: React.FC<buttonType> = (props) => (
  <BaseButton {...props} className={`btn-outline ${props.className}`} />
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

export const BaseButton: React.FC<buttonType> = ({ variant = 'info', wide, type, className = '', ...props }) => (
  <button
    type={type}
    className={`btn font-bold w-fit ${computeClassFromProps({ variant, wide })} ${className}`}
    {...props}
  >
    {(props as buttonIcon).icon ? (
      <Icon
        name={(props as buttonIcon).icon}
        size={(props as buttonIcon).size || 24}
        iconColor={(props as buttonIcon).color}
      />
    ) : null}
    {(props as buttonText).text ?? ''}
  </button>
);
