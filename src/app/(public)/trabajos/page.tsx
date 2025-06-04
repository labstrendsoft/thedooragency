import { PortadaTrabajo } from '@/modules/Trabajo/components/PortadaTrabajo';
import { ProjectListAll } from '@/modules/Trabajo/components/ProjectListAll';
import { NavLinksTrabajo } from '@/modules/Trabajo/components/tabs/NavLinks';
import { PROJECTS } from '@/modules/Trabajo/data/projects';

export default function Trabajos() {
  // await new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <>
      <PortadaTrabajo />
      <div id="nuestros-trabajos" className="pb-16">
        <NavLinksTrabajo />

        <div className="mx-auto max-w-[1000px]">
          <ProjectListAll projects={PROJECTS} />
        </div>
      </div>
    </>
  );
}
