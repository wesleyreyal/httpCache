import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useIsAuth } from '../../../context';
import { BaseButton, buttonType } from '../../common/button';

type commonElementProps = {
  text: string;
  link: string;
};

const loggedOut: (commonElementProps & buttonType)[] = [
  {
    text: 'register',
    link: '/register',
    className: 'btn-outline',
    variant: 'ghost'
  },
  {
    text: 'sign in',
    link: '/signin',
    variant: 'success'
  },
];

const loggedIn: commonElementProps[] = [
  {
    text: 'domains',
    link: '/domains',
  },
  {
    text: 'profile',
    link: '/profile',
  },
];

const LoggedOutItems: React.FC = () => (
  <>
    {loggedOut.map(({ link, text, ...props }, id) => (
      <Link href={link} key={id} className='text-xl capitalize'>
        <BaseButton text={text} {...props} />
      </Link>
    ))}
  </>
)

const LoggedInItems: React.FC = () => (
  <>
    {loggedIn.map(({ link, text }, id) => (
      <li key={id} className='flex'>
        <Link href={link} key={id} className='rounded-lg text-xl capitalize'>
          {text}
        </Link>
      </li>
    ))}
  </>
)

const ResponsiveMenuItems: React.FC = () => {
  const connected = useIsAuth();

  return connected ? <LoggedInItems /> : <LoggedOutItems />
}

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='shadow transition-all transition-duration-300'>
      <div className='lg:px-8 lg:m-auto'>
        <div className="w-full navbar">
          <div className="flex-none lg:hidden absolute">
            <label className="btn btn-square btn-ghost" onClick={() => setOpen(!open)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
          </div>
          <div className='navbar-start w-full'>
            <Link href="/" className='text-2xl btn btn-ghost normal-case m-auto lg:m-0'>Souin</Link>
          </div>
          <div className="navbar-end hidden lg:flex">
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
      </div>
    </nav>
  );
};

export default Navbar;
