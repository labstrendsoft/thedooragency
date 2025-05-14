'use client';

import { ActiveLink } from './ActiveLink';
import { useMenuList } from './useMenuList';

export const NavLinks = () => {
  const menuList = useMenuList();

  return (
    <div className="flex gap-8">
      {menuList.map((link) => (
        <ActiveLink key={link.name} {...link} />
      ))}
    </div>
  );
};
