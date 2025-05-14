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
      <div className="border-muted-foreground/20 flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
        <FolderOpen className="mb-3 h-12 w-12 text-white" strokeWidth={1.5} />
        <h3 className="text-muted-foreground text-xl font-medium">
          No hay proyectos en esta categoría
        </h3>
        <p className="mt-1 text-sm text-white">Explora otras categorías disponibles</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1">
      {projects.map((project, index) => {
        const rowDirection = index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'; // 🔁 alternar dirección

        return (
          <div
            key={project.id}
            className={`flex ${rowDirection} items-center gap-10 p-4 shadow-sm`}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="mb-4 aspect-square max-w-[450px] object-cover object-top"
            />
            <div className="space-y-2.5">
              <h2 className="text-xl font-black text-white">{project.title}</h2>
              <div className="flex flex-wrap gap-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="flex items-center text-xs text-white/80">
                    <Dot className="w-fit" /> {tag}
                  </span>
                ))}
              </div>
              <p className="mb-6 text-sm text-white">{project.description}</p>
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
