import {InputWithoutLabel} from "../input";
import {Icon} from "../icon";
import React, {useState} from "react";
import {EditConfiguration} from "./editConfiguration";
import {Button} from "../button";

type subdomainProps = {
  zone: string;
  ip: string;
}
export const Subdomain: React.FC<subdomainProps> = ({zone, ip}) => {
  const [change, setChange] = useState(false);
  const handleInputChange = (value: boolean) => {
    setChange(value);
  };

  const handleButtonClick = (value: boolean) => {
    setChange(value);
  };

  return (
    <>
      <InputWithoutLabel defaultValue={zone} onChange={handleInputChange} />
      <InputWithoutLabel  defaultValue={ip} onChange={handleInputChange} />
      <EditConfiguration />
      {change ? <Button text="save changes" onclick={handleButtonClick}/> : <div className="w-full flex justify-center">
        <Icon name="trash" iconColor="red" size={32}/>
      </div>}
    </>
  )
}
