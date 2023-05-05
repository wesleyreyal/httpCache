import React from 'react';

type blurBlockProps = {
  children: React.ReactNode;
};
export const BlurBlock: React.FC<blurBlockProps> = ({ children }) => (
  <div className="backdrop-blur-md bg-white/20 w-fit rounded-2xl">{children}</div>
);
