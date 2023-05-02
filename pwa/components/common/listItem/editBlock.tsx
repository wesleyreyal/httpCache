import React from "react";
import {Block} from "./block";
import {Icon} from "../icon";

export const EditBlock: React.FC = () => {
  return (
    <Block className="gap-x-40 mt-6" shadow={false} children={
      <>
        <Icon name='trash' size={32} iconColor="red" />
        <Icon name='plus' size={42} />
      </>} />
  )
}
