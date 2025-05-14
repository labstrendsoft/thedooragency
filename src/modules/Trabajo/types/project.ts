import { StaticImageData } from 'next/image';

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;

  url: string;
  categories: CategorySlug[];
};

export type CategorySlug =
  | 'todos'
  | 'marketing-digital'
  | 'desarrollo-web'
  | 'branding'
  | 'produccion-visual';
