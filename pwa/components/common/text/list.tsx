import React, { PropsWithChildren } from 'react';

type listType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

export const List: React.FC<PropsWithChildren<listType>> = ({ children, ...props }) => (
  <ul {...props}>
    {children}
  </ul>
);
