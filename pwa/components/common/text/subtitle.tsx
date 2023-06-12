import React from 'react';

type SubtitleProps = {
  text: string;
  level?: 3 | 4;
};

export const Subtitle: React.FC<SubtitleProps> = ({ text, level = 1 }) => {
  const Tag = level === 3 ? 'h3' : 'h4';

  return <Tag className={`text-${level === 3 ? 'lg' : 'md'} mt-4`}>{text}</Tag>;
};
