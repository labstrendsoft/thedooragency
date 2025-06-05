import MetadaSeoEstatica from '@/common/components/customize/MetadataSeoEstatica';
import { HomeView } from '../../modules/Home/HomeView';

export const metadata = MetadaSeoEstatica({
  title: 'Inicio',
});
export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return <HomeView />;
}
