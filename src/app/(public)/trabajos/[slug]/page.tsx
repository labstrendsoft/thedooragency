import { ProjectList } from '@/modules/Trabajo/components/ProjectList';
import { PROJECTS } from '@/modules/Trabajo/data/projects';
import { CategorySlug } from '@/modules/Trabajo/types/project';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

type PageProps = {
  params: Promise<{ slug: CategorySlug }>; // params ahora es una promesa
};
const VALID_SLUGS: CategorySlug[] = [
  'marketing-digital',
  'desarrollo-web',
  'branding',
  'produccion-visual',
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!VALID_SLUGS.includes(slug)) {
    return {
      title: 'Categoría no encontrada',
      description: 'La categoría que buscas no existe.',
    };
  }

  // Filtra proyectos por slug
  const filteredProjects = PROJECTS.filter((project) => project.categories.includes(slug));

  // Metadata básica
  const title = `Trabajos de ${slug.replace('-', ' ')}`;
  const description =
    filteredProjects.length > 0
      ? `Explora ${filteredProjects.length} proyectos en la categoría ${slug.replace('-', ' ')}.`
      : `Actualmente no hay proyectos en la categoría ${slug.replace('-', ' ')}.`;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    title,
    description,
  };
}

export default async function Page({ params }: PageProps) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const { slug } = await params;

  if (!VALID_SLUGS.includes(slug)) {
    notFound(); // 404 si no existe la categoría
  }
  const filteredProjects = PROJECTS.filter((project) => project.categories.includes(slug));

  return (
    <div id="nuestros-trabajos" className="pb-10">
      <div className="mx-auto max-w-[1000px]">
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}
