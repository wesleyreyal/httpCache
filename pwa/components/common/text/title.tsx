import React from "react";

type titleProps = {
  title: string;
}

export const Title: React.FC<titleProps> = ({title}) => {
  return (
    <h1 className="title_yellow relative group text-5xl font-bold m-8">
      {title}
      <span className="absolute bottom-0.5 left-0 w-0 h-3 bg-yellow transition-all w-80 -z-10"></span>
    </h1>
  );
}
