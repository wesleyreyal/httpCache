import React from 'react';

type inputType = { label?: string; id?: string; optional?: boolean } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputBaseWithoutLabel: React.FC<Omit<inputType, 'label'>> = (props) => <InputBase id="abcd" {...props} />;

export const InputBase: React.FC<inputType> = ({ className = '', type = 'text', label, id, optional, ...input }) => (
  <div className="form-control w-80">
    {label && (
      <label htmlFor={id}>
        {label}
        {optional && ' (optional)'}
      </label>
    )}
    <input
      type={type}
      className={`input input-bordered w-full rounded-lg border-2 border-argentinian_blue p-1 pl-4 ${className}`}
      id={id}
      {...input}
    />
  </div>
);
