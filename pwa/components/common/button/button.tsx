import React from "react";

type buttonProps = {
  text: string;
  onclick?: (value: boolean) => void;
  functionShowPopup?: (value: boolean) => void;
  wide?: boolean;
  empty?: boolean;
  addedClass?: string;
}

export const Button: React.FC<buttonProps> = ({text, onclick, functionShowPopup, wide, empty, addedClass}) => {
  const handleClick = () => {
    if (onclick) onclick(false);
    if (functionShowPopup) functionShowPopup(true);
  };

  return (
    <button className={`btn rounded-sm font-bold w-fit border-4 border-argentinian_blue
      ${addedClass ? addedClass : ''}
      ${wide ? 'px-9 py-2' : 'px-3 py-0 h-fit'}
      ${empty ? 'bg-eggshell text-argentinian_blue' : 'bg-argentinian_blue text-white'}`}
      onClick={handleClick}>
      {text}
    </button>
  )
}

