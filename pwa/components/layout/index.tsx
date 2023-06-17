import React from 'react';
import Navbar from './navbar';
import { Footer } from './footer';
import { usePathname } from 'next/navigation';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const p = usePathname();

  return (
    <>
      <main>
        <Navbar />
        <div className={p !== '/' ? 'py-4 px-4 md:px-0 m-auto max-w-screen-sm lg:max-w-screen-lg' : ''}>{children}</div>
      </main>
      <Footer />
    </>
  );
};
