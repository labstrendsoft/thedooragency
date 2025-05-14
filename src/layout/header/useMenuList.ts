import { NAVIGATION_MENU } from "@/common/data/navigation";
import { usePathname } from "next/navigation";

export function useMenuList() {
  const pathname = usePathname();

  return NAVIGATION_MENU.map((item) => {
    const active = item.matchStart
      ? pathname === item.href || pathname.startsWith(`${item.href}/`)
      : pathname === item.href;

    return { ...item, active };
  });
}
