import { Nav } from "../types/nav";

export const NAVIGATION_MENU: Nav[] = [
  {
    name: "SOBRE NOSOTROS",
    href: "/nosotros",
    matchStart: false,
  },
  {
    name: "TRABAJOS",
    href: "/trabajos/todos",
    matchStart: true,
  },
];
