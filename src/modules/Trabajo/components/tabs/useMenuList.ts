import { usePathname } from 'next/navigation';
import { NAVIGATION_MENU_TRABAJOS } from '../../data/nav-trabajos';

export function useMenuListTrabajo() {
  const pathname = usePathname();

  return NAVIGATION_MENU_TRABAJOS.map((item) => {
    const active = pathname === item.href;

    return { ...item, active };
  });
}
