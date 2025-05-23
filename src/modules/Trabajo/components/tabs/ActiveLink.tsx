'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Nav } from '@/common/types/nav';

export const ActiveLink = ({ name, href, icon, active }: Nav & { active: boolean }) => {
  return (
    <Link
      href={href}
      className={cn(
        'text-xs font-medium text-white/70 transition-colors duration-300 ease-out hover:text-white max-md:px-3',
        active && 'text-white',
      )}
      scroll={false}
    >
      {icon}
      <p className="whitespace-nowrap">{name}</p>
    </Link>
  );
};
