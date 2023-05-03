import React from "react";
import {BlurBlock} from "./blurBlock";
import {Title} from "../text";
import {Input} from "../input";
import {Button} from "../button";

export const Signin: React.FC = () => (
  <BlurBlock>
    <Title title="Sign in" blueLine={true} />
    <Input placeholder="johndoe@example.com" labelText="mail" />
    <Input placeholder="mysecretpassword" labelText="password" password={true}/>
    <Button text="sign in" wide={true}/>
  </BlurBlock>
)
