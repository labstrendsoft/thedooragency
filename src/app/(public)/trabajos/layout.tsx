import { PortadaTrabajo } from '@/modules/Trabajo/components/PortadaTrabajo';
import { NavLinksTrabajo } from '@/modules/Trabajo/components/tabs/NavLinks';

export default function TrabajosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-thedooragency-negro pb-16">
      <PortadaTrabajo />
      <NavLinksTrabajo />
      {children}
    </div>
  );
}
