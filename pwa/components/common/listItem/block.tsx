import React from "react";

type blockProps = {
  children: React.ReactNode;
  className?: string;
  shadow? : boolean;
}

export const Block: React.FC<blockProps> = ({children, className, shadow= true}) => {
  return (
    <div className={`listItem bg-eggshell w-full flex justify-center mb-3 max-w-screen-xl ${shadow ? 'drop-shadow-md' : ''} ${className}`}>
      {children}
    </div>
  )
}
