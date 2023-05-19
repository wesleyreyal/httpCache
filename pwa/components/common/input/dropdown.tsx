import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

type Option = {
  value: string;
  label: string;
  onChange?: (value: string[]) => void;
};

type dropdownProps = {
  options: ReadonlyArray<Option>;
  onChange?: (value: string) => void;
};

export const Dropdown: React.FC<dropdownProps> = ({ options, onChange }) => (
  <Select
    closeMenuOnSelect={false}
    components={animatedComponents}
    isMulti
    options={options}
    className="w-96"
    onChange={(selectedOptions) => {
      const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
      if (onChange) {
        onChange(selectedValues);
      }
    }}
  />
);
