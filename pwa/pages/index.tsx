import React from 'react';
import { CollapseBlock } from '../components/common/listItem';
import { Register, Signin } from '../components/common/form';
import { Navbar } from '../components/common/navbar';

const Welcome = () => (
  <>
    <Navbar />
    <div className="container m-auto grid gap-4 max-w-screen-xl">
      {[...new Array(4)].map((_, idx) => (
        <CollapseBlock
          configurations={[
            {
              zone: 'www',
              ip: '127.0.0.1',
            },
            {
              zone: 'mail',
              ip: '127.0.0.1',
            },
            {
              zone: 'blog',
              ip: '127.0.0.1',
            },
          ]}
          number={idx}
          key={idx}
          name={`domain${idx}.com`}
        />
      ))}
    </div>
    <Signin />
    <Register />
  </>
);
export default Welcome;
