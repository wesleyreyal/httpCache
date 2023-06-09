import React from 'react';

type textProps = {
  text: string;
};
export const Text: React.FC<textProps> = ({ text }) => <p>{text}</p>;
