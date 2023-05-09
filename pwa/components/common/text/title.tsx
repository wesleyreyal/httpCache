import React from 'react';

type titleProps = {
  title: string;

  blueLine?: boolean;
};

export const Title: React.FC<titleProps> = ({ title, blueLine }) => {
  return (
    <h1 className="title_yellow relative group text-5xl font-bold w-fit z-10 mb-6">
      {title}
      <span className="absolute bottom-0.5 left-0 h-3 inline-block w-full -z-10 ml-2 bg-argentinian_blue"></span>
    </h1>
  );
};
