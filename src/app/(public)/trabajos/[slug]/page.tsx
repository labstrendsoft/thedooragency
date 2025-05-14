import { ProjectList } from '@/modules/Trabajo/components/ProjectList';
import { PROJECTS } from '@/modules/Trabajo/data/projects';
import { CategorySlug } from '@/modules/Trabajo/types/project';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: CategorySlug }>; // params ahora es una promesa
};
const VALID_SLUGS: CategorySlug[] = [
  'todos',
  'marketing-digital',
  'desarrollo-web',
  'branding',
  'produccion-visual',
];

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!VALID_SLUGS.includes(slug)) {
    notFound(); // 404 si no existe la categoría
  }
  const filteredProjects =
    slug === 'todos' ? PROJECTS : PROJECTS.filter((project) => project.categories.includes(slug));

  return (
    <div className="mx-auto max-w-[1000px]">
      <ProjectList projects={filteredProjects} />
    </div>
  );
}
