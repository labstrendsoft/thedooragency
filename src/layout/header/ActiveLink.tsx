'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Nav } from '@/common/types/nav';

export const ActiveLink = ({ name, href, icon, active }: Nav & { active: boolean }) => {
  return (
    <Link
      href={href}
      className={cn('w-full text-xs font-medium text-white hover:font-bold', active && 'font-bold')}
    >
      {icon}
      <p className="hidden whitespace-nowrap md:block">{name}</p>
    </Link>
  );
};
