import React from "react";

type buttonProps = {
  text: string;
  onclick?: (value: boolean) => void;
  functionShowPopup?: (value: boolean) => void;

  wide?: boolean;
}

export const Button: React.FC<buttonProps> = ({text, onclick, functionShowPopup, wide}) => {
  const handleClick = () => {
    if (onclick) onclick(false);
    if (functionShowPopup) functionShowPopup(true);
  };

  return (
    <button className={`btn bg-argentinian_blue rounded-sm text-white font-bold m-auto w-fit ${wide ? 'px-7 py-5' : 'p-3'}`} onClick={handleClick}>{text}</button>
  )
}

