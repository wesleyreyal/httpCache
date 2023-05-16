import { useState } from 'react';

type switchProps = {
  defaultChecked?: boolean;
};

export const Switch: React.FC<switchProps> = ({ defaultChecked = false }) => {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div
      className={`md:w-14 md:h-7 w-12 h-6 flex items-center border-2 rounded-full p-1 cursor-pointer ${
        !checked ? 'border-powder_blue' : 'border-argentinian_blue'
      }`}
      onClick={() => setChecked(!checked)}
    >
      <div
        className={` md:w-5 md:h-5 h-4 w-4 rounded-full shadow-md transform duration-300 ease-in
        ${!checked ? 'bg-powder_blue' : 'bg-argentinian_blue transform translate-x-6'}`}
      ></div>
    </div>
  );
};
