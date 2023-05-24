import React from 'react';
import { InputGuesser, InputGuesserProps } from './guesser';

export type GroupProps = { className?: string; label?: string; inputs: ReadonlyArray<InputGuesserProps> };

export const Group: React.FC<GroupProps> = ({ className = 'flex gap-4', label, inputs }) => {
  return (
    <div className="form-control w-full">
      {label && <label className="text-xl font-bold">{label}</label>}
      <div className={className}>
        {inputs.map(({ ...inputProps }, id) => (
          <InputGuesser key={id} {...inputProps} />
        ))}
      </div>
    </div>
  );
};
