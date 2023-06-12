import React from 'react';
import Navbar from './navbar';
import { Footer } from './footer';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <main>
      <Navbar />
      <div className="py-4 container px-4 md:px-0 m-auto md:prose-xl lg:prose lg:prose-2xl">{children}</div>
    </main>
    <Footer />
  </>
);
