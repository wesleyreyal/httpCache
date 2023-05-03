import React from 'react';
import { Navbar } from '../components/common/navbar';
import { ListCard } from '../components/common/card';
import {Title} from "../components/common/text";
import {AddBlock, DomainBlock} from "../components/common/listItem";
import {BlurBlock, Signin} from "../components/common/form";
import {Button} from "../components/common/button";
import {Input} from "../components/common/input";
import {Register} from "../components/common/form";

const Welcome = () => (
  <>
    <Navbar />
    <ListCard />
    <Register />
    <Signin />
    <Input placeholder="Johndoe@example.com" labelText="Mail" />
    <BlurBlock>
      <Title title="Your domains" blueLine={true}/>
      <Button text="hey click heaaaare" wide={true}/>
    </BlurBlock>
    <Title title="Your domains" />
    <div className="w-full flex flex-col items-center">
      <AddBlock />
      <DomainBlock number={1} name="google.com" countConfiguration={3} />
      <DomainBlock number={2} name="google.com" countConfiguration={3} />
      <DomainBlock number={3} name="google.com" countConfiguration={3} />
    </div>
  </>
)
export default Welcome;
