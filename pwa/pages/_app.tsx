import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { DehydratedState } from 'react-query';
import { AuthProviders, ToastProvider } from '../context';
import { Layout } from '../components/layout';

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
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
