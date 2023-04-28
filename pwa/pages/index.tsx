import React from 'react';
import { Navbar } from '../components/common/navbar';
import { ListCard } from '../components/common/card';
import {Title} from "../components/common/text";
import {AddBlock} from "../components/common/list/addBlock";

const Welcome = () => (
  <>
    <Navbar />
    <ListCard />
    <Title title="Your domains" />
    <div className="w-full">
      <AddBlock />
    </div>
  </>
);
export default Welcome;
