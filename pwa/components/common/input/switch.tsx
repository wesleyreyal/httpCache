import React, { useState } from 'react';

type switchProps = {
  defaultChecked?: boolean;
};

export const Switch: React.FC<switchProps> = ({ defaultChecked = false }) => {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <input
      type="checkbox"
      className="toggle toggle-info"
      onClick={() => setChecked(!checked)}
      defaultChecked={checked}
    />
  );
};
