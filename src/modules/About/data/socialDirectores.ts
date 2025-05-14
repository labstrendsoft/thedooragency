import fbIcon from '@public/redes/fb.webp';
import wspIcon from '@public/redes/wsp.webp';
import igIcon from '@public/redes/ig.webp';
import ytIcon from '@public/redes/yt.webp';
import directorPhoto1 from '@public/about/sebastian.webp';
import directorPhoto2 from '@public/about/alexander.webp';

export const directorTeam = [
  {
    name: 'SEBASTIAN QUIVIO',
    role: 'Director General',
    photo: directorPhoto1,
    socials: [
      { name: 'Facebook', url: 'https://facebook.com/director1', icon: fbIcon },
      { name: 'Instagram', url: 'https://instagram.com/director1', icon: igIcon },
    ],
  },
  {
    name: 'ALEXANDER PEREZ',
    role: 'Director de Tecnología',
    photo: directorPhoto2,
    socials: [
      { name: 'YouTube', url: 'https://youtube.com/director2', icon: ytIcon },
      {
        name: 'Whatsapp',
        url: 'https://instagram.com',
        icon: wspIcon,
      },
    ],
  },
];
