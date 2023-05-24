import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProviders, ToastProvider } from 'context';
import { Layout } from 'components/layout';
import { NextPageContext } from 'next';
import { CookieStorage } from 'storage';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <AuthProviders authenticated={pageProps.authenticated}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProviders>
    </ToastProvider>
  );
}

MyApp.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  let authenticated = false;

  const { req } = ctx;
  if (req) {
    const cookies = req.headers.cookie?.split(';').reduce((acc: Record<string, string>, current) => {
      const [name, value] = current.split('=');
      acc[name.trim()] = value.trim();
      new CookieStorage().set(name.trim(), value.trim());
      return acc;
    }, {});

    authenticated = !!cookies?.token;
  }

  return {
    pageProps: {
      authenticated,
    },
  };
};

export default MyApp;
