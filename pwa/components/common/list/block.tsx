import React from "react";

type blockProps = {
  children: React.ReactNode;
}

export const Block: React.FC<blockProps> = ({children}) => {
  return (
    <div className="listItem bg-eggshell w-full drop-shadow-lg flex justify-center mb-96">
      {children}
    </div>
  )
}
