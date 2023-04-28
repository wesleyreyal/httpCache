import React from "react";
import {Block} from "./block";
import {Icon} from "../icon";

export const AddBlock: React.FC = () => {
  return (
    <Block children={<Icon name='plus' />} />
  )
}
