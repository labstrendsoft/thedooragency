'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Nav } from '@/common/types/nav';

export const ActiveLink = ({ name, href, icon, active }: Nav & { active: boolean }) => {
  return (
    <Link
      href={href}
      className={cn(
        'relative w-full text-xs font-medium text-white/70 uppercase transition-colors duration-300',
        active && 'text-white',

        'after:absolute after:bottom-[-6px] after:h-[1px] after:bg-white/80 after:transition-all after:duration-400',
        active
          ? 'after:left-0 after:w-full'
          : 'after:left-1/2 after:w-0 hover:after:left-0 hover:after:w-full',
      )}
    >
      {icon}
      <p className="hidden whitespace-nowrap md:block">{name}</p>
    </Link>
  );
};
