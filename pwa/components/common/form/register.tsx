import React from "react";
import {BlurBlock} from "./blurBlock";
import {Title} from "../text";
import {Input} from "../input";
import {Button} from "../button";

export const Register: React.FC = () => (
  <BlurBlock>
    <Title title="Register" blueLine={true} />
    <Input placeholder="johndoe@example.com" labelText="mail" />
    <Input placeholder="john" labelText="firstname" />
    <Input placeholder="doe" labelText="lastname" />
    <Input placeholder="vinvin corp" labelText="company" optional={true} />
    <Input placeholder="mysecretpassword" labelText="password" password={true}/>
    <Input placeholder="mysecretpassword" labelText="confirm password" password={true}/>
    <div className="w-full flex flex-nowrap justify-between">
      <Button text="register" wide={true}/>
      <Button text="cancel" wide={true} empty={true} />
    </div>
  </BlurBlock>
)
