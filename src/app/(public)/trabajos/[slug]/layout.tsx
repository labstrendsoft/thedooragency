import { NavLinksTrabajo } from '@/modules/Trabajo/components/tabs/NavLinks';

export default function TrabajoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {' '}
      <NavLinksTrabajo />
      {children}
    </>
  );
}
