import React, {useState} from "react";

type buttonProps = {
  text: string;
  onclick: (value: boolean) => void;
}

export const Button: React.FC<buttonProps> = ({text, onclick}) => { // Ajout de onclick
  const [change, setChange] = useState(true);

  const handleClick = () => { // Enlever l'argument event
    setChange(false);
    if (onclick) {
      onclick(false);
    }
    console.log('aaaaaaaaaa');
  };

  return (
    <button className="btn bg-argentinian_blue rounded-sm text-white font-bold py-3 ml-4" onClick={handleClick}>{text}</button> // Utilisation de onClick
  )
}

