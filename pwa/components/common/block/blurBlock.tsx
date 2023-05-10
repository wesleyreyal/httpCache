import React, { PropsWithChildren } from 'react';

type blurBlockProps = {
  className?: string;
};

export const BlurBlock: React.FC<PropsWithChildren<blurBlockProps>> = ({ children, className }) => (
  <div className={`backdrop-blur-md bg-white/20 w-fit rounded-2xl ${className}`}>{children}</div>
);
