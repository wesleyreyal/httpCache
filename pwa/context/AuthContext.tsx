import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { ROUTES } from 'routes';
import { Token } from 'storage';

type authContextType = {
  connected: boolean;
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = React.createContext<authContextType>({
  connected: false,
  setConnected: () => {
    return;
  },
});

type AuthProviderProps = {
  authenticated: boolean;
};

export const AuthProviders: React.FC<React.PropsWithChildren<AuthProviderProps>> = ({ authenticated, children }) => {
  const [connected, setConnected] = useState(authenticated || !!new Token().get());

  return <AuthContext.Provider value={{ connected, setConnected }}>{children}</AuthContext.Provider>;
};

export const useIsAuth = () => {
  const { connected } = useContext(AuthContext);
  return connected;
};

export const useDispatchAuth = () => {
  const { setConnected } = useContext(AuthContext);
  return setConnected;
};

export const useRedirectIfLogged = () => {
  const { push } = useRouter();
  const isAuthenticated = useIsAuth();

  useEffect(() => {
    if (isAuthenticated) {
      push(ROUTES.HOME);
    }
  }, [isAuthenticated, push]);
};

export const useRedirectIfNotLogged = () => {
  const { push } = useRouter();
  const isAuthenticated = useIsAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      push(ROUTES.SIGN_IN);
    }
  }, [isAuthenticated, push]);
};
