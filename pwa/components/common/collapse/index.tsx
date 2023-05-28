import React, { useState } from 'react';

export const Collapse: React.FC<React.PropsWithChildren<{ title: React.ReactNode }>> = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ${
        open ? 'collapse-open shadow-lg' : 'collapse-close'
      }`}
    >
      <div
        className="collapse-title text-xl font-medium flex justify-between px-10 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {title}
      </div>
      <div className="collapse-content justify-between gap-y-4 items-center">{children}</div>
    </div>
  );
};
