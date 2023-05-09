import React from 'react';
import { BlurBlock } from './blurBlock';
import { Title } from '../text';
import { InputBase } from '../input';
import { BaseButton } from '../button';

export const Signin: React.FC = () => (
  <BlurBlock>
    <form action="" className="pt-10 px-16 pb-12  flex justify-center items-center flex-col gap-y-6">
      <Title title="Sign in" />
      <InputBase placeholder="johndoe@example.com" label="mail" type="email" />
      <InputBase placeholder="mysecretpassword" label="password" type="password" />
      <BaseButton text="sign in" wide />
    </form>
  </BlurBlock>
);
