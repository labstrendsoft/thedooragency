import { NAVIGATION_MENU } from '@/common/data/navigation';
import { usePathname } from 'next/navigation';

export function useMenuList() {
  const pathname = usePathname();

  return NAVIGATION_MENU.map((item) => {
    let active = false;

    if (item.href === '/trabajos/todos') {
      // Caso especial: considerar activo si el pathname empieza con /trabajos
      active = pathname === '/trabajos' || pathname.startsWith('/trabajos/');
    } else if (item.matchStart) {
      active = pathname === item.href || pathname.startsWith(`${item.href}/`);
    } else {
      active = pathname === item.href;
    }

    return { ...item, active };
  });
}
