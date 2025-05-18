import { AboutView } from '@/modules/About/AboutView';

export default async function Nosotros() {
  await new Promise((resolve) => setTimeout(resolve, 4000)); // delay de prueba

  return <AboutView />;
}
