import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useDispatchAuth, useIsAuth } from 'context';
import { BaseButton, buttonType } from 'components/common/button';
import { Blur } from 'components/common/block';
import { ROUTES } from 'routes';
import { Token } from 'storage';
import { NavItem } from './item';

type commonElementProps = {
  text: string;
  link: string;
  isActive?: (v: string) => boolean;
};

const loggedOut: ReadonlyArray<commonElementProps & buttonType> = [
  {
    text: 'register',
    link: ROUTES.REGISTER,
    className: 'btn-outline',
    variant: 'ghost',
  },
  {
    text: 'sign in',
    link: ROUTES.SIGN_IN,
    variant: 'success',
  },
];

const loggedIn: ReadonlyArray<commonElementProps> = [
  {
    text: 'domains',
    link: '/domains',
    isActive: (pathname) => pathname.includes('/domains') || pathname.includes('/configurations'),
  },
  {
    text: 'profile',
    link: '/profile',
  },
];

const LoggedOutItems: React.FC = () => (
  <>
    {loggedOut.map(({ link, text, ...props }, id) => (
      <Link href={link} key={id} className="w-fit">
        <BaseButton text={text} {...props} />
      </Link>
    ))}
  </>
);

const Logout = () => {
  const setConnected = useDispatchAuth();

  return (
    <NavItem
      isActive={() => false}
      withLink={false}
      onClick={() => {
        new Token().delete();
        setConnected(false);
      }}
    >
      logout
    </NavItem>
  );
};

const LoggedInItems: React.FC = () => (
  <>
    {loggedIn.map(({ link, text, ...props }, id) => (
      <NavItem key={id} path={link} {...props}>
        {text}
      </NavItem>
    ))}
  </>
);

const CommonNavbarItem: React.FC = () => <NavItem path="/terms-of-service">terms of service</NavItem>;

const ResponsiveMenuItems: React.FC = () => {
  const connected = useIsAuth();

  return connected ? (
    <>
      <LoggedInItems />
      <CommonNavbarItem />
      <Logout />
    </>
  ) : (
    <>
      <CommonNavbarItem />
      <LoggedOutItems />
    </>
  );
};

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow transition-all transition-duration-300 sticky top-0 z-10">
      <Blur className="lg:px-8 lg:m-auto">
        <div className="w-full navbar">
          <div className="flex-none lg:hidden absolute">
            <label className="btn btn-square btn-ghost" onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
          </div>
          <div className="navbar-start m-auto">
            <Link href="/" className="text-2xl btn btn-ghost normal-case m-auto lg:m-0">
              Souin
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex w-full">
            <ul className="menu menu-horizontal px-1 gap-4">
              <ResponsiveMenuItems />
            </ul>
          </div>
        </div>
        <div className={`px-4 pb-2 flex ${!open ? 'h-0 hidden' : 'h-full'} lg:hidden`}>
          <ul className="menu gap-2">
            <ResponsiveMenuItems />
          </ul>
        </div>
      </Blur>
    </nav>
  );
};

export default Navbar;
