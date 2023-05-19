import React, { useState } from 'react';
import { Dropdown, InputBase, Switch } from '../input';
import { BaseButton } from '../button';
import { useJsonContext } from '../../../context';

export const JSONEditor: React.FC = () => {
  const { getCurrentJSON, setJSON } = useJsonContext();
  const [currentJSON, setCurrentJSON] = useState(() => getCurrentJSON());

  const renderJSON = (data: { [key: string]: any }) => {
    return Object.entries(data).map(([key, value]) => {
      if (key === 'allowed_http_verbs' && Array.isArray(value)) {
        const allowedHttpVerbsOptions = ['GET', 'POST', 'PUT', 'PATCH'];

        return (
          <li key={key}>
            <strong>{key}: </strong>
            <Dropdown
              options={allowedHttpVerbsOptions.map((option) => ({
                value: option,
                label: option,
              }))}
            />
          </li>
        );
      }

      if (typeof value === 'object') {
        return (
          <li key={key}>
            <strong>{key}:</strong>
            <ul>{renderJSON(value)}</ul>
          </li>
        );
      }

      if (typeof value === 'string') {
        return (
          <li key={key}>
            <strong>{key}: </strong>
            <InputBase defaultValue={value} />
          </li>
        );
      }

      if (typeof value === 'boolean') {
        return (
          <li key={key}>
            <strong>{key}: </strong>
            <Switch defaultChecked={value} />
          </li>
        );
      }

      return null;
    });
  };

  return (
    <>
      <ul>{renderJSON(currentJSON)}</ul>
      <BaseButton
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        text="Save changes"
      />
    </>
  );
};
