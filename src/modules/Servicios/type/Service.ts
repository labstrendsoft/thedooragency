import { StaticImageData } from 'next/image';

type Step = {
  title: string;
  text: string;
};

// Tipo para cada servicio
export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  contentImage: StaticImageData;
  steps: Step[];
};
