'use client';

import { ActiveLink } from './ActiveLink';
import { useMenuListTrabajo } from './useMenuList';
import { motion } from 'framer-motion';

export const NavLinksTrabajo = () => {
  const menuList = useMenuListTrabajo();

  return (
    <motion.div
      className="bg-thedooragency-negro/80 sticky top-[76px] z-20 w-full"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-10 lg:px-0">
        <div className="mx-auto flex w-fit flex-wrap items-center justify-center max-md:gap-y-4 max-md:divide-x max-md:divide-white md:gap-8 md:rounded-full md:border md:border-white md:px-8 md:py-4">
          {menuList.map((link) => (
            <ActiveLink key={link.name} {...link} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
