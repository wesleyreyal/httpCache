import {AllowedIcons, Icon} from "../icon";
import React from "react";

type popupProps = {
  iconName: AllowedIcons;
  text: string;
  success: boolean;
}

export const Popup: React.FC<popupProps> = ({iconName, text, success}) => (
  <div className={`${success ? 'border-green text-green' : 'border-red text-red'} absolute z-10 right-0 w-fit border-2 font-semibold text-xl gap-x-4 flex items-center p-4 rounded-xl bg-eggshell drop-shadow-md`}>
    <Icon name={iconName} size={32} iconColor={success ? 'green' : 'red'} />
    {text}
  </div>
)
