import React, { PropsWithChildren } from 'react';

export type cardProps = {
  text: string;
  title: string;
};
export const Card: React.FC<PropsWithChildren<cardProps>> = ({ children, text, title }) => (
  <div className="card bg-base-100 shadow-md rounded-2xl h-full min-w-full flex items-center justify-center hover:scale-105 transition-all">
    <div className="card-body text-center flex flex-col gap-4 items-center">
      {children}
      <h2 className="card-title font-bold font-sans text-xl">{title}</h2>
      <p>{text}</p>
    </div>
  </div>
);
