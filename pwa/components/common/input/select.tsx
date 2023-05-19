import React, { useCallback, useRef, useState } from 'react';
import { Icon } from 'components/common/icon';
import useOnClickOutside from 'hooks/useClickOutside';

type ChipSelectProps = {
  name: string;
  onClick: () => void;
};
const ChipSelect: React.FC<ChipSelectProps> = ({ name, onClick }) => {
  return (
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-base border border-success">
      <div className="text-xs font-normal leading-none max-w-full flex-initial">{name}</div>
      <div className="flex flex-auto flex-row-reverse">
        <Icon onClick={onClick} size={12} name="x" className="cursor-pointer hover:text-teal-400 rounded-full ml-2" />
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
    <div onClick={onClick} className="cursor-pointer w-full rounded-t border-b hover:bg-gray-100">
      <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-gray-200">
        <div className="w-full items-center flex">
          <div className="mx-2 leading-6">{name}</div>
        </div>
      </div>
    </div>
  );
};

type MultiSelectProps = {
  label: string;
  options: ReadonlyArray<option>;
  placeholder?: string;
  required?: boolean;
  selectedOptions?: ReadonlyArray<option>;
};

export const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  options,
  placeholder,
  required,
  selectedOptions = [],
}) => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [choices, setChoices] = useState<ReadonlyArray<option>>(selectedOptions);
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
              <input
                onChange={({ target: { value } }) => setValue(value)}
                value={value}
                placeholder={!choices.length ? placeholder : ''}
                className="h-full w-full input input-bordered w-full rounded-lg border-2 focus:outline-none p-1 px-4 border-0"
              />
            </div>
          </div>
          <div className="text-base w-8 py-1 pl-2 pr-1 border-l flex items-center">
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

type SelectProps = { label: string; options: ReadonlyArray<option> } & (
  | { isMultiple: true; selectedOptions?: ReadonlyArray<option> }
  | { isMultiple?: false; selectedOption?: option }
);

export const Select: React.FC<
  SelectProps & React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
> = ({ className, isMultiple, label, name, options, placeholder, ...props }) =>
  isMultiple ? (
    <MultiSelect label={label} options={options} placeholder={placeholder} {...props} />
  ) : (
    <div className={`form-control gap-y-1 ${className ?? ''}`}>
      <label htmlFor={name}>{label}</label>
      <select className="select w-full" name={name} id={name} {...props}>
        {placeholder && (
          <option disabled selected>
            {placeholder}
          </option>
        )}
        {options.map(({ name, value }, id) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );