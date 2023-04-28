import React from 'react';
import { Navbar } from '../components/common/navbar';
import { ListCard } from '../components/common/card';
import {Title} from "../components/common/text";

const Welcome = () => (
  <>
    <Navbar />
    <ListCard />
    <Title title="Your domains" />
  </>
);
export default Welcome;
