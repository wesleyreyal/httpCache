import Link from 'next/link';
import type { FC } from 'react';

type NavElementProps = {
  text?: string;
  link?: string;
};

export const Element: FC<NavElementProps> = ({ link = 'change this link', text = 'change this text' }) => (
  <li>
    <Link href={link} className="block py-2 pl-3 pr-4 text-rich_black rounded md:p-0 relative group">
      <span>{text}</span>
      <span className="absolute bottom-0.5 left-0 w-0 h-0.5 bg-rich_black transition-all group-hover:w-full"></span>
    </Link>
  </li>
);
