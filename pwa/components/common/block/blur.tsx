import React, { PropsWithChildren } from 'react';

type blurBlockProps = {
  className?: string;
};

export const Blur: React.FC<PropsWithChildren<blurBlockProps>> = ({ children, className }) => (
  <div className={`backdrop-blur-md bg-white/20 ${className}`}>{children}</div>
);

export default Blur;
