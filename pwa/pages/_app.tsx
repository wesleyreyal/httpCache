import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { DehydratedState } from 'react-query';
import { AuthProviders } from '../context';

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  return (
    <AuthProviders>
      <Component {...pageProps} />;
    </AuthProviders>
  );
}

export default MyApp;
