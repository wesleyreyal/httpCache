import React from 'react';

// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
//
// const animatedComponents = makeAnimated();

type Option = {
  value: string;
  label: string;
};

type dropdownProps = {
  options: ReadonlyArray<Option>;
};

export const Dropdown: React.FC<dropdownProps> = ({ options }) =>
  /* <Select closeMenuOnSelect={false} components={animatedComponents} isMulti options={options} className="w-96" /> */
  null;
