import React, { useContext, useState } from 'react';

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

export const AuthProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  return <AuthContext.Provider value={{ connected, setConnected }}>{children}</AuthContext.Provider>;
};

export const useIsAuth = () => {
  const { connected } = useContext(AuthContext);
  return connected;
};
