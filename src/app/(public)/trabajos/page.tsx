import { PortadaTrabajo } from '@/modules/Trabajo/components/PortadaTrabajo';
import { ProjectList } from '@/modules/Trabajo/components/ProjectList';
import { NavLinksTrabajo } from '@/modules/Trabajo/components/tabs/NavLinks';
import { PROJECTS } from '@/modules/Trabajo/data/projects';

export default function Trabajos() {
  // await new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <>
      <PortadaTrabajo />
      <div id="nuestros-trabajos">
        <NavLinksTrabajo />

        <div className="mx-auto max-w-[1000px]">
          <ProjectList projects={PROJECTS} />
        </div>
      </div>
    </>
  );
}
