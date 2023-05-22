import React, { useState } from 'react';

export type SwitchProps = {
  className?: string;
  defaultChecked?: boolean;
  label: string;
};

export const Switch: React.FC<SwitchProps> = ({ className = '', defaultChecked = false, label }) => {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="form-control">
      <label>{label}</label>
      <input
        type="checkbox"
        className={`toggle toggle-info ${className}`}
        onClick={() => setChecked(!checked)}
        defaultChecked={checked}
      />
    </div>
  );
};
