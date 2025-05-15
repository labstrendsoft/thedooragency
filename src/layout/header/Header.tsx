'use client';
import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from './NavLinks';
import logoTrend from '@public/logoTheDoor.webp';
import { MobileMenu } from './MenuMovil';

export const Header = () => {
  return (
    <header className="bg-thedooragency-negro sticky top-0 z-40 w-full overflow-hidden drop-shadow-md">
      <div className="tracking-in-expand-forward-top mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-6 xl:px-0">
        <Link href="/">
          <Image
            src={logoTrend}
            alt="logo de trendacademy"
            className="h-auto w-[80px] object-contain will-change-transform"
            priority
          />
        </Link>
        <NavLinks />
        <MobileMenu />
      </div>
    </header>
  );
};
