import MetadaSeoEstatica from '@/common/components/customize/MetadataSeoEstatica';
import { ContactView } from '@/modules/Contact/ContactView';

export const metadata = MetadaSeoEstatica({
  title: 'Contacto',
  description: 'Descubre todos los servicios que ofrece The Door Agency para impulsar tu marca.',
});

export default async function Contacto() {
  // await new Promise((resolve) => setTimeout(resolve, 6000));

  return <ContactView />;
}
