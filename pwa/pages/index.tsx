import React from 'react';
import { ConfigurationEditor } from '../components/common/configurationEditor';

const json = {
  apps: {
    cache: {
      allowed_http_verbs: ['GET', 'POST'],
      api: {
        basepath: 'ddddddddddddddddddddddddd',
        debug: {
          basepath: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
          enable: true,
          security: false,
        },
        prometheus: {
          basepath: '',
          enable: true,
          security: false,
        },
      },
    },
  },
};
const Welcome = () => {
  return <ConfigurationEditor json={json} />;
};
export default Welcome;
