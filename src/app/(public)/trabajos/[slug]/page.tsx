import { ProjectList } from '@/modules/Trabajo/components/ProjectList';
import { NavLinksTrabajo } from '@/modules/Trabajo/components/tabs/NavLinks';
import { PROJECTS } from '@/modules/Trabajo/data/projects';
import { CategorySlug } from '@/modules/Trabajo/types/project';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: CategorySlug }>; // params ahora es una promesa
};
const VALID_SLUGS: CategorySlug[] = [
  'marketing-digital',
  'desarrollo-web',
  'branding',
  'produccion-visual',
];

export default async function Page({ params }: PageProps) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const { slug } = await params;

  if (!VALID_SLUGS.includes(slug)) {
    notFound(); // 404 si no existe la categoría
  }
  const filteredProjects = PROJECTS.filter((project) => project.categories.includes(slug));

  return (
    <>
      <NavLinksTrabajo />

      <section id="nuestros-trabajos" className="mx-auto max-w-[1000px]">
        <ProjectList projects={filteredProjects} />
      </section>
    </>
  );
}
