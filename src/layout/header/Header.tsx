'use client';
import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from './NavLinks';
import logoTrend from '@public/logoTheDoor.webp';
import { MobileMenu } from './MenuMovil';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <header className="bg-thedooragency-negro sticky top-0 z-40 w-full overflow-hidden border-b border-white/30">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto flex h-[76px] w-full max-w-[1200px] items-center justify-between px-6 xl:px-0"
      >
        <Link href="/">
          <Image
            src={logoTrend}
            alt="logo de trendacademy"
            className="h-auto object-cover will-change-transform"
            priority
          />
        </Link>
        <NavLinks />
        <MobileMenu />
      </motion.div>
    </header>
  );
};
