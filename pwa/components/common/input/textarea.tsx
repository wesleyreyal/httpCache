import React from 'react';

type textAreaType = {
  text: string;
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
export const Textarea: React.FC<textAreaType> = ({ text, ...props }) => {
  return (
    <textarea
      className="textarea w-full h-96 border-1 border-neutral-400 border-opacity-30 rounded-md  "
      defaultValue={text}
      {...props}
    />
  );
};
