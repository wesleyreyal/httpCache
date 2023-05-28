import { Configuration } from 'actions';
import { JsonEditor } from 'components/common/editor';
import { UserFriendlyEditor } from 'components/common/editor/friendly';
import { Tabbar } from 'components/common/tab';
import { JsonProvider } from 'context';
import { Configuration as ConfigurationModel } from 'model';
import { NextPageContext } from 'next';
import React from 'react';

const Configurations = (props) => {
  console.log(props);

  return (
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
};

Configurations.getInitialProps = (ctx: NextPageContext & { req: { cookies: Record<string, string> } }) => {
  return new Configuration()
    .getOne({
      id: '9',
      ...(ctx?.req?.cookies ? { config: { headers: { Authorization: `Bearer ${ctx.req.cookies.token}` } } } : {}),
    } as ConfigurationModel)
    .then((item) => ({ configuration: item }))
    .catch(() => {
      return { domains: [] as ReadonlyArray<ConfigurationModel>, total: 0 };
    });
};

export default Configurations;
