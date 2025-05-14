'use client';

import { ActiveLink } from './ActiveLink';
import { useMenuListTrabajo } from './useMenuList';

export const NavLinksTrabajo = () => {
  const menuList = useMenuListTrabajo();

  return (
    <div className="mx-auto max-w-[1200px] pt-16 pb-10">
      <div className="mx-auto flex w-fit items-center justify-center gap-8 rounded-full border border-white px-8 py-4">
        {menuList.map((link) => (
          <ActiveLink key={link.name} {...link} />
        ))}
      </div>
    </div>
  );
};
