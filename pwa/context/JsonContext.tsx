import React, { createContext, useContext, useState } from 'react';

type jsonContextType = {
  getCurrentJSON: () => object;
  setJSON: (json: object) => void;
};

const JsonContext = createContext<jsonContextType>({
  getCurrentJSON: () => ({}),
  setJSON: () => ({}),
});

export const JsonProvider: React.FC<React.PropsWithChildren<{ json: object }>> = ({ children, json }) => {
  const [currentJSON, setCurrentJSON] = useState(json);

  const getCurrentJSON = () => {
    return currentJSON;
  };

  const setJSON = (json: object) => {
    setCurrentJSON(json);
  };

  return <JsonContext.Provider value={{ getCurrentJSON, setJSON }}>{children}</JsonContext.Provider>;
};

export const useJsonContext = () => {
  return useContext(JsonContext);
};
