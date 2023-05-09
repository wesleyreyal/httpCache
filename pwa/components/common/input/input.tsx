import React from 'react';

export type inputType = {
  label?: string;
  id?: string;
  optional?: boolean;
  inputClassName?: string;
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
}) => (
  <div className={`form-control items-center w-80 ${className}`}>
    {label && (
      <label htmlFor={id} className="self-start">
        {label}
        {optional && ' (optional)'}
      </label>
    )}
    <input
      type={type}
      className={
        type === 'button' || type === 'submit'
          ? inputClassName || ''
          : 'input input-bordered w-full rounded-lg border-2 border-argentinian_blue p-1 px-4'
      }
      id={id}
      {...input}
    />
  </div>
);
