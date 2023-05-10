import React from 'react';
import { Icon } from '../icon';
import Link from 'next/link';

export const Footer: React.FC = () => (
  <footer className="footer py-4 px-10 f-fit items-center md:h-20">
    <div className="flex text-neutral-content justify-between w-full flex-col items-center gap-y-4 md:flex-row">
      <div className="flex items-center">
        <Icon name="pin" size={20} iconColor="white" />
        <p className="">Paris</p>
      </div>
      <p>2023 VINVIN Corp Tous droits réservés</p>
      <Link href="">Conditions générales d’utilisation</Link>
      <Link href="">Nous contacter</Link>
    </div>
  </footer>
);
