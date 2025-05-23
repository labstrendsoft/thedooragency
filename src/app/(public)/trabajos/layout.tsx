import { PortadaTrabajo } from '@/modules/Trabajo/components/PortadaTrabajo';

export default function TrabajosLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-thedooragency-negro pb-16">
      <PortadaTrabajo />
      {children}
    </main>
  );
}
