import React from 'react';
import { BlurBlock } from './blurBlock';
import { Title } from '../text';
import { InputBase } from '../input';
import { Button } from '../button';

export const Signin: React.FC = () => (
  <BlurBlock>
    <form action="" className="pt-10 px-16 pb-12  flex justify-center items-center flex-col gap-y-6">
      <Title title="Sign in" blueLine={true} />
      <InputBase placeholder="johndoe@example.com" label="mail" type="email" />
      <InputBase placeholder="mysecretpassword" label="password" type="password" />
      <Button text="sign in" wide={true} />
    </form>
  </BlurBlock>
);
