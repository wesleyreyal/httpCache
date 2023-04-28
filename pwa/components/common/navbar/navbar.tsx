import React, { FC, useState } from 'react';
import Element from './element';
import Link from 'next/link';
import { useIsAuth } from '../../../context';

type commonElementProps = {
  text: string;
  link: string;
};

const commonElementsConnected: commonElementProps[] = [
  {
    text: 'register',
    link: '/register',
  },
  {
    text: 'sign in',
    link: '/signin',
  },
];

const commonElementsUnconnected: commonElementProps[] = [
  {
    text: 'domains',
    link: '/domains',
  },
  {
    text: 'profile',
    link: '/profile',
  },
];
export const Navbar: FC = () => {
  const [show, setShow] = useState(false);
  const connected = useIsAuth();

  return (
    <nav className="bg-eggshell fixed w-full z-20 top-0 left-0 shadow-md">
      <div className="flex flex-wrap items-center justify-between mx-auto px-10 py-4">
        <Link href="/" className="flex items-end">
          <span className="self-center text-4xl font-semibold whitespace-nowrap logo_souin">Souin</span>
          <p className="logo_app">app</p>
        </Link>
        <div className="flex">
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={show}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto ${show ? '' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-eggshell gap-x-12">
            <Element text="about" link="/about" />
            {connected
              ? commonElementsUnconnected.map((element, id) => {
                  return <Element key={id} {...element} />;
                })
              : commonElementsConnected.map((element, id) => {
                  return <Element key={id} {...element} />;
                })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
