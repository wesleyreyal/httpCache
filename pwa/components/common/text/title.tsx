import React from 'react';

type titleProps = {
  title: string;
};

export const Title: React.FC<titleProps> = ({ title }) => (
  <h1 className="relative group text-5xl font-bold w-fit z-10 mb-6">
    {title}
    <span className="absolute bottom-0.5 left-0 h-3 inline-block w-full -z-10 ml-2 bg-argentinian_blue"></span>
  </h1>
);
