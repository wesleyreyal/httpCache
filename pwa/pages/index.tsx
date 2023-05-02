import React from 'react';
import { Navbar } from '../components/common/navbar';
import { ListCard } from '../components/common/card';
import {Title} from "../components/common/text";
import {AddBlock, DomainBlock, EditBlock} from "../components/common/listItem";
import {Icon} from "../components/common/icon";

const Welcome = () => (
  <>
    <Navbar />
    <ListCard />
    <Title title="Your domains" />
    <div className="w-full flex flex-col items-center">
      <AddBlock />
      <DomainBlock number={1} name="google.com" countConfiguration={3} />
    </div>
  </>
)
export default Welcome;
