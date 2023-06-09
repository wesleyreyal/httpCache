import React from 'react';

type subtitleProps = {
  text: string;
};
export const Subtitle: React.FC<subtitleProps> = ({ text }) => <h3 className="text-lg font-semibold mt-4">{text}</h3>;
