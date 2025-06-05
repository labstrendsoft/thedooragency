// lib/funMetaData.ts
import { Metadata } from 'next';

type OGType =
  | 'website'
  | 'article'
  | 'book'
  | 'profile'
  | 'music.song'
  | 'music.album'
  | 'music.playlist'
  | 'music.radio_station'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'video.other';

type Props = {
  title: string;
  description?: string;
  type?: OGType;
  image?: string;
};

export const MetadaSeoEstatica = ({
  title,
  description = 'Impulsa tu marca con The Door Agency, una agencia digital especializada en branding, desarrollo web, software a medida, producción audiovisual y marketing digital.',
  type = 'website',
  image,
}: Props): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const defaultImage = `${baseUrl}/opengraph-image`;
  const ogImage = image || defaultImage;

  const isHome = title.trim().toLowerCase() === 'inicio' || title.trim() === '';

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    title: isHome
      ? 'The Door Agency'
      : {
          default: title,
          template: `%s - The Door Agency`,
        },
    description,
    keywords: [
      'agencia digital',
      'branding',
      'desarrollo web',
      'marketing digital',
      'producción audiovisual',
      'software a medida',
      'The Door Agency',
    ],
    icons: '/favicon.png',
    openGraph: {
      title: isHome
        ? 'The Door Agency'
        : `${title} - ¡Agencia digital de branding, web y marketing!`,
      description,
      url: baseUrl,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Imagen de The Door Agency',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isHome ? 'The Door Agency' : title,
      description,
      images: [ogImage],
    },
  };
};

export default MetadaSeoEstatica;
