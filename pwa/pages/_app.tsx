import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { DehydratedState } from 'react-query';
import { AuthProviders } from '../context';
import { ToastProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  return (
    <ToastProvider>
      <AuthProviders>
        <Component {...pageProps} />
      </AuthProviders>
    </ToastProvider>
  );
}

export default MyApp;
