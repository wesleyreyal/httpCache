import { defaultJson } from 'context';
import React, { useState } from 'react';
import { JsonSchema } from 'types/configuration';
import { Form } from '../form/forms';
import { option } from '../input';

const allowedHTTPOptions: ReadonlyArray<option> = ['DELETE', 'GET', 'HEAD', 'PATCH', 'POST', 'PUT'].map((method) => ({
  name: method,
  value: method,
}));

const apiInputs = ['Prometheus', 'Souin'].map((api) => ({
  type: 'group',
  label: api,
  inputs: [
    {
      type: 'switch',
      label: 'enable',
      className: 'm-auto',
      name: `api.${api}.enable`,
    },
    {
      name: `api.${api}.basepath`,
      placeholder: defaultJson.api?.[api.toLowerCase() as 'souin' | 'prometheus']?.basepath,
      optional: true,
      label: 'basepath',
    },
  ],
}));

export const UserFriendlyEditor: React.FC = () => {
  const configurationValue: JsonSchema = defaultJson;
  const [allowedHTTP, setAllowedHTTP] = useState<ReadonlyArray<option>>([allowedHTTPOptions[0], allowedHTTPOptions[1]]);

  return (
    <Form
      inputs={[
        {
          options: allowedHTTPOptions,
          selectedOptions: [allowedHTTPOptions[0], allowedHTTPOptions[1]],
          type: 'select',
          isMultiple: true,
          name: 'allowed_http_cache',
          placeholder: defaultJson.allowed_http_cache?.join(', '),
          label: 'Allowed HTTP',
          handleChange: (options: ReadonlyArray<option>) => {
            setAllowedHTTP(options);
          },
        },
        {
          type: 'group',
          className: '',
          label: 'API',
          inputs: [
            {
              name: 'api.basepath',
              placeholder: defaultJson.api?.basepath,
              optional: true,
              label: 'basepath',
            },
            ...apiInputs,
          ],
        },
        {
          name: 'cache_name',
          placeholder: defaultJson.cache_name,
          optional: true,
          label: 'Cache name',
        },
        {
          name: 'default_cache_control',
          placeholder: defaultJson.default_cache_control,
          optional: true,
          label: 'Default Cache-Control header',
        },
        {
          type: 'switch',
          label: 'distributed',
          className: '',
          name: `distributed`,
        },
        {
          type: 'group',
          className: '',
          label: 'Regex',
          inputs: [
            {
              name: 'regex.exclude',
              placeholder: defaultJson.regex?.exclude,
              optional: true,
              label: 'exclude',
            },
          ],
        },
        {
          name: 'stale',
          placeholder: defaultJson.stale,
          optional: true,
          label: 'Stale duration',
        },
        {
          type: 'group',
          label: 'Timeout',
          inputs: [
            {
              name: 'timeout.backend',
              placeholder: defaultJson.timeout?.backend,
              optional: true,
              label: 'backend',
            },
            {
              name: 'timeout.cache',
              placeholder: defaultJson.timeout?.cache,
              optional: true,
              label: 'cache',
            },
          ],
        },
        {
          name: 'ttl',
          placeholder: defaultJson.ttl,
          optional: true,
          label: 'Time-to-live duration',
        },
      ]}
    />
  );
};
