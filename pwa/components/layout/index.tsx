import React from 'react';
import Navbar from './navbar';
import { Footer } from './footer';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <main>
      <Navbar />
      {children}
    </main>
    <Footer />
  </>
);
