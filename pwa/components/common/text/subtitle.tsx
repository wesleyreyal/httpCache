import React from 'react';

type SubtitleProps = {
  text: string;
  level?: 1 | 2;
};

export const Subtitle: React.FC<SubtitleProps> = ({ text, level = 1 }) => {
  const Tag = level === 1 ? 'h3' : 'h4';

  return <Tag className={`text-${level === 1 ? 'lg' : 'md'} font-semibold mt-4`}>{text}</Tag>;
};
