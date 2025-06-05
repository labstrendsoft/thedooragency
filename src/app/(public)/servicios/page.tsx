import MetadaSeoEstatica from '@/common/components/customize/MetadataSeoEstatica';
import { ServiciosView } from '@/modules/Servicios/ServiciosView';

export const metadata = MetadaSeoEstatica({
  title: 'Servicios',
  description: 'Descubre todos los servicios que ofrece The Door Agency para impulsar tu marca.',
});

export default async function Servicios() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return <ServiciosView />;
}
