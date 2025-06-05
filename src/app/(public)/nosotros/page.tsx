import MetadaSeoEstatica from '@/common/components/customize/MetadataSeoEstatica';
import { AboutView } from '@/modules/About/AboutView';

export const metadata = MetadaSeoEstatica({
  title: 'Nosotros',
  description:
    'Conoce a The Door Agency, una agencia digital comprometida con el éxito de tu marca a través de branding, desarrollo web, software a medida, producción audiovisual y marketing digital.',
});
export default async function Nosotros() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return <AboutView />;
}
