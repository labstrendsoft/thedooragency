'use client';

import { ActiveLink } from './ActiveLink';
import { useMenuListTrabajo } from './useMenuList';

export const NavLinksTrabajo = () => {
  const menuList = useMenuListTrabajo();

  return (
    <div className="bg-thedooragency-negro/80 w-full">
      <div className="mx-auto max-w-[1200px] px-6 pt-10 lg:px-0">
        <div className="mx-auto flex w-fit flex-wrap items-center justify-center max-md:gap-y-4 max-md:divide-x max-md:divide-white md:gap-8 md:rounded-full md:border md:border-white md:px-8 md:py-4">
          {menuList.map((link) => (
            <ActiveLink key={link.name} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};
