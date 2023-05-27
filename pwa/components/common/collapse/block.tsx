import React, { PropsWithChildren } from 'react';

type blockProps = {
  className?: string;
  withShadow?: boolean;
};

export const Block: React.FC<PropsWithChildren<blockProps>> = ({ children, className, withShadow = true }) => (
  <div
    className={`listItem bg-eggshell w-full flex justify-center mb-3 ${
      withShadow ? 'drop-shadow-md' : ''
    } ${className}`}
  >
    {children}
  </div>
);
