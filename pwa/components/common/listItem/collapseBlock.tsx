import React, { useState } from 'react';
import { Subdomain } from './subdomain';
import { BlurBlock } from "../form";
import { BaseButton } from "../button";

type collapseBlockProps = {
  number: number;
  name: string;
  configurations: ReadonlyArray<subdomain>;
};

type subdomain = {
  zone: string;
  ip: string;
};

export const CollapseBlock: React.FC<collapseBlockProps> = ({ number, name, configurations }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ${
        open ? 'collapse-open' : 'collapse-close'
      }`}
    >
      <div className="collapse-title text-xl font-medium flex justify-between px-10" onClick={() => setOpen(!open)}>
        <span>{number}</span>
        <span>{name}</span>
        <span>{configurations.length}</span>
      </div>
      <div className="collapse-content flex flex-col justify-around gap-y-4 mt-4 items-center">
        {configurations.map((subdomain, idx) => (
          <Subdomain key={idx} {...subdomain} />
        ))}
      </div>
    </div>
  );
};
