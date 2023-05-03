import React from "react";
import {Block} from "./block";
import {Icon} from "../icon";

export const AddBlock: React.FC = () => (
    <Block children={<Icon name='plus' size={42} />} />
)
