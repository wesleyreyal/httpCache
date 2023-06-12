import React, { PropsWithChildren } from 'react';

export const List: React.FC<PropsWithChildren> = ({ children }) => {
  return <ul className="list-disc pl-8">{children}</ul>;
};
