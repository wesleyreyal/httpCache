import React from 'react';
import Link from 'next/link';

type tabProps = {
  text: string;
  handleClick: () => void;
  className: string;
};

export const Tab: React.FC<tabProps> = ({ text, handleClick, className }) => {
  return (
    <Link
      href=""
      className={`tab tab-lifted ${className}`}
      onClick={() => {
        handleClick();
      }}
    >
      {text}
    </Link>
  );
};
