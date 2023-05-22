import React from 'react';

type titleProps = {
  title: string;
  className?: string;
};

export const Title: React.FC<titleProps> = ({ title, className }) => (
  <h1 className={`relative group text-5xl font-bold w-fit mb-4 ${className}`}>
    {title}
    <span className="absolute bottom-0.5 left-0 h-2 w-full ml-2 bg-primary opacity-25"></span>
  </h1>
);
