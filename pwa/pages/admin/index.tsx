import { User } from 'actions/user';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Admin = () => {
  // Load the admin client-side
  const [DynamicAdmin, setDynamicAdmin] = useState(<p>Loading...</p>);
  useEffect(() => {
    (async () => {
      const HydraAdmin = (await import('@api-platform/admin')).HydraAdmin;

      setDynamicAdmin(<HydraAdmin entrypoint={window.origin}></HydraAdmin>);
    })();
  }, []);

  new User().getCurrentUser().then(console.log)

  return (
    <>
      <Head>
        <title>API Platform Admin</title>
      </Head>

      {DynamicAdmin}
    </>
  );
};
export default Admin;
