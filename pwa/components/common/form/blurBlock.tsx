import React from "react";

type blurBlockProps = {
  children: React.ReactNode;
}
export const BlurBlock: React.FC<blurBlockProps> = ({children}) => (
  <div className="backdrop-blur-md bg-white/20 w-fit pt-10 px-16 pb-12 rounded-2xl flex justify-center items-center flex-col gap-y-6">
    {children}
  </div>
)
