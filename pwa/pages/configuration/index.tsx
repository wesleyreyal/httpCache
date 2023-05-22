import { JsonEditor } from 'components/common/editor';
import { UserFriendlyEditor } from 'components/common/editor/friendly';
import { Tabbar } from 'components/common/tab';
import { JsonProvider } from 'context';
import React from 'react';

const Configuration = () => (
  <div className="container m-auto">
    <JsonProvider>
      <Tabbar
        tabs={[
          { name: 'User friendly', TabItem: <UserFriendlyEditor /> },
          { name: 'JSON', TabItem: <JsonEditor /> },
        ]}
      />
    </JsonProvider>
  </div>
);

export default Configuration;
