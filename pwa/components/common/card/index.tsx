import React, { PropsWithChildren } from 'react';

export type cardProps = {
  title: string;
  text: string;
};
export const Card: React.FC<PropsWithChildren<cardProps>> = ({ children, text, title }) => (
  <div className="card w-96 bg-eggshell shadow-md rounded-xl p-4 h-64 flex items-center justify-center">
    <div className="card-body text-center flex flex-col gap-4 items-center">
      {children}
      <h2 className="card-title font-bold font-sans text-xl">{title}</h2>
      <p>{text}</p>
    </div>
  </div>
);
