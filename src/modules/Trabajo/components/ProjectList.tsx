import Image from 'next/image';
import { Project } from '../types/project';
import { Dot, FolderOpen } from 'lucide-react';
import ButtonLinkTheDoorAgency from '@/common/components/customize/ButtonLinkTheDoorAgency';

type ProjectListProps = {
  projects: Project[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  if (projects.length === 0) {
    return (
      <div className="pt-10">
        <div className="mx-6 flex flex-col items-center justify-center rounded-lg p-8 text-center lg:mx-0 lg:mt-0">
          <FolderOpen className="mb-3 h-12 w-12 text-white" strokeWidth={1.5} />
          <h3 className="text-muted-foreground text-xl font-medium">
            No hay proyectos en esta categoría
          </h3>
          <p className="mt-1 text-sm text-white">Explora otras categorías disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 pt-10">
      {projects.map((project, index) => {
        const rowDirection = index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'; // 🔁 alternar dirección

        return (
          <div
            key={project.id}
            className={`flex ${rowDirection} flex-col items-start gap-6 shadow-sm min-[450px]:items-center lg:gap-10`}
          >
            <div className="mb-4 aspect-auto w-full max-w-[450px] flex-shrink-0 overflow-hidden rounded-xl px-6 lg:aspect-square lg:px-0">
              <Image
                src={project.image}
                alt={project.title}
                className="object-contain object-top"
              />
            </div>
            <div className="flex flex-col items-center gap-2.5 px-6 lg:items-start lg:px-0">
              <h2 className="font-black text-white md:text-xl">{project.title}</h2>
              <div className="flex flex-wrap gap-3 md:gap-x-4 md:gap-y-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="flex items-center text-xs text-white/80">
                    <Dot className="w-fit" /> {tag}
                  </span>
                ))}
              </div>
              <p className="mb-6 max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
                {project.description}
              </p>
              <ButtonLinkTheDoorAgency
                href={project.url}
                variant="outline"
                className="w-full max-w-fit"
                external
              >
                Ver trabajo
              </ButtonLinkTheDoorAgency>
            </div>
          </div>
        );
      })}
    </div>
  );
};
