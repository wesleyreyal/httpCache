import React, { useCallback, useRef, useState } from 'react';
import { Icon } from '../icon';
import useOnClickOutside from '../../../hooks/useClickOutside';

type ChipSelectProps = {
  name: string;
  onClick: () => void;
};
const ChipSelect: React.FC<ChipSelectProps> = ({ name, onClick }) => {
  return (
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
      <div className="text-xs font-normal leading-none max-w-full flex-initial">{name}</div>
      <div className="flex flex-auto flex-row-reverse">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

type option = {
  name: string;
  value: string;
};
type OptionProps = option & {
  onClick: () => void;
};
const Option: React.FC<OptionProps> = ({ name, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
      <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
        <div className="w-full items-center flex">
          <div className="mx-2 leading-6">{name}</div>
        </div>
      </div>
    </div>
  );
};

const options: option[] = [
  {
    name: 'HTML',
    value: 'html',
  },
  {
    name: 'CSS',
    value: 'css',
  },
  {
    name: 'Ruby',
    value: 'ruby',
  },
];

type MultiSelectProps = {
  label: string;
  required?: boolean;
};

export const MultiSelect: React.FC<MultiSelectProps> = ({ label, required }) => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [choices, setChoices] = useState<ReadonlyArray<option>>([]);
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setOpen(false);
  });

  const addChoice = useCallback(
    (choice: option) => {
      setChoices((prevChoices) => {
        return [...prevChoices, choice];
      });
    },
    [setChoices]
  );
  const removeChoice = useCallback(
    (choice: option) => {
      setChoices((prevChoices) => {
        return prevChoices.filter((c) => c.value !== choice.value);
      });
    },
    [setChoices]
  );

  return (
    <div className="flex flex-col items-center relative" ref={ref}>
      <div className="w-full form-control" onClick={() => setOpen(true)}>
        <label>
          {label}
          {required && ' *'}
        </label>
        <div className="input my-2 p-1 flex">
          <div className="flex flex-auto flex-wrap">
            {choices.map((choice, id) => (
              <ChipSelect key={id} name={choice.name} onClick={() => removeChoice(choice)} />
            ))}
            <div className="flex-1">
              <input onChange={({ target: { value } }) => setValue(value)} value={value} className="h-full w-full" />
            </div>
          </div>
          <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
            <Icon size={16} name={open ? 'chevron-up' : 'chevron-down'} />
          </div>
        </div>
      </div>
      {open && (
        <div className="absolute shadow top-full bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto">
          <div className="flex flex-col w-full">
            {options
              .filter((o) => {
                return o.name.toLowerCase().includes(value.toLowerCase()) && !choices.some((c) => c.value === o.value);
              })
              .map((o, id) => (
                <Option
                  key={id}
                  {...o}
                  onClick={() => {
                    addChoice(o);
                    setValue('');
                  }}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
