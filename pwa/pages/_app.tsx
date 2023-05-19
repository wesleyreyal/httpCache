import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProviders, ToastProvider } from 'context';
import { Layout } from 'components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <AuthProviders>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProviders>
    </ToastProvider>
  );
}

export default MyApp;
