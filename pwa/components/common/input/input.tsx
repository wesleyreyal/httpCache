import React, { useEffect, useState } from 'react';
import { AllowedVariant } from 'types';
import { AllowedIcons, Icon } from 'components/common/icon';

type VariantConfigType = {
  [key: string]: {
    textColor?: string;
    inputBorderColor: string;
    iconColor?: string;
  };
};

export type inputType = {
  label?: string;
  id?: string;
  optional?: boolean;
  inputClassName?: string;
  variant?: AllowedVariant;
  subText?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const InputBaseWithoutLabel: React.FC<Omit<inputType, 'label'>> = (props) => <InputBase id="abcd" {...props} />;

export const InputBase: React.FC<inputType> = ({
  className = '',
  type = 'text',
  label,
  id,
  optional,
  inputClassName,
  ...input
}) => {
  return (
    <div className={`form-control gap-y-1 ${className}`}>
      {label && (
        <label htmlFor={id} className="self-start">
          {label}
          {optional ? ' (optional)' : ' *'}
        </label>
      )}
      <input
        required={!optional}
        type={type}
        className={`input input-bordered w-full rounded-lg p-1 px-4 ${inputClassName}`}
        id={id}
        {...input}
      />
    </div>
  );
};
