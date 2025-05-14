import { ReactElement } from "react";

export type NavTrabajos = {
  name: string;
  href: string;
  icon?: ReactElement;
  active?: boolean;
};
