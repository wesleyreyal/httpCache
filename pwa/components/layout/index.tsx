import React from 'react';
import Navbar from './navbar';
import { Footer } from './footer';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <main>
      <Navbar />
      <div className="py-4 container m-auto px-4">{children}</div>
    </main>
    <Footer />
  </>
);
