import React, { useEffect, useState } from 'react';
import { AllowedVariant } from 'types';
import { AllowedIcons, Icon } from 'components/common/icon';

type VariantConfigType = {
  [key: string]: {
    textColor?: string;
    inputBorderColor: string;
    iconName?: AllowedIcons;
    iconColor?: string;
  };
};

const variantConfig: VariantConfigType = {
  info: {
    textColor: 'text_rich_black',
    inputBorderColor: 'border-argentinian_blue',
  },
  danger: {
    textColor: 'text-red',
    inputBorderColor: 'border-red',
    iconName: 'alert',
    iconColor: 'red',
  },
  success: {
    textColor: 'text-rich_black',
    inputBorderColor: 'border-green',
  },
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
  variant = 'info',
  subText = 'Invalid credential',
  ...input
}) => {
  const [variantProps, setVariantProps] = useState(variantConfig.info);

  useEffect(() => {
    const props = variantConfig[variant];
    setVariantProps(props);
  }, [variant]);

  return (
    <div className={`form-control gap-y-1 ${className}`}>
      {label && (
        <label htmlFor={id} className={`self-start ${variantProps.textColor}`}>
          {label}
          {optional ? ' (optional)' : ' *'}
        </label>
      )}
      <input
        required={!optional}
        type={type}
        className={`input input-bordered w-full rounded-lg border-2 p-1 px-4 ${inputClassName} ${variantProps.inputBorderColor}`}
        id={id}
        {...input}
      />
      {variant !== 'info' && variantProps.iconName && (
        <p className="text-red flex items-center gap-x-1">
          <Icon name={variantProps.iconName} size={18} iconColor={variantProps.iconColor} />
          {subText}
        </p>
      )}
    </div>
  );
};
