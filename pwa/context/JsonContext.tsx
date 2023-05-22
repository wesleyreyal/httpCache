import React, { createContext, useContext, useReducer } from 'react';
import { JsonSchema } from 'types/configuration';

export const defaultJson: JsonSchema = {
  allowed_http_cache: ['GET', 'HEAD'],
  api: {
    basepath: '/souin-api',
    prometheus: {
      basepath: '/prometheus',
    },
    souin: {
      basepath: '/souin',
    },
  },
  cache_keys: {
    '.*.css': {
      disable_body: true,
      disable_host: true,
      disable_method: true,
      disable_query: true,
      headers: ['Authorization', 'Content-Type'],
      hide: true,
    },
  },
  cache_name: 'Souin',
  default_cache_control: 'public, s-maxage=86400',
  distributed: true,
  regex: { exclude: 'url_regex_to_exclude.+' },
  stale: '1d',
  timeout: {
    backend: '10s',
    cache: '10ms',
  },
  ttl: '120s',
  urls: {
    '/first-.+': {
      ttl: '1000s',
    },
    '/second-route': {
      ttl: '10s',
    },
    '/third-route': {
      ttl: '50s',
    },
  },
  surrogate_keys: {
    The_First_Test: {
      headers: {
        'Content-Type': '.+',
      },
    },
    The_Second_Test: {
      url: 'the/second/.+',
    },
    The_Third_Test: {},
    The_Fourth_Test: {},
  },
};

type jsonContextType = {
  json?: JsonSchema;
  dispatch: React.Dispatch<JsonFormAction>;
};

const initialState: JsonSchema = {};

const JsonContext = createContext<jsonContextType>({
  json: undefined,
  dispatch: () => undefined,
});

type JsonFormAction = {
  type: 'update';
  payload: JsonSchema;
};

const reducer = (state: JsonSchema = initialState, { type, payload }: JsonFormAction) => {
  switch (type) {
    case 'update':
      if (!payload) {
        return undefined;
      }
      return {
        ...state,
        ...payload,
      };
  }
  return state;
};

export const JsonProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [json, dispatch] = useReducer(reducer, undefined);

  return <JsonContext.Provider value={{ json, dispatch }}>{children}</JsonContext.Provider>;
};

export const useDispatchConfiguration = () => {
  const { dispatch } = useContext(JsonContext);
  return dispatch;
};

export const useConfiguration = () => {
  const { json } = useContext(JsonContext);
  return json;
};
