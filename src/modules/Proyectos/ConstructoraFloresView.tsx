import React from 'react';
import uno from '@public/works/constructoraFlores/1.webp';
import dos from '@public/works/constructoraFlores/2.webp';
import tres from '@public/works/constructoraFlores/3.webp';
import Image from 'next/image';
import { PortadaConstructoraFlores } from './components/constructoraFlores/PortadaContructoraFlores';
import YoutubeLite from './components/videoYoutube';
export const ConstructoraFloresView = () => {
  return (
    <div className="bg-thedooragency-negro">
      <PortadaConstructoraFlores />
      <section id="video-blue" className="mx-auto max-w-[800px] px-6 py-10 lg:px-0">
        <YoutubeLite url="https://www.youtube.com/watch?v=jvRicFNkIT8" />
      </section>
      <div className="grid w-full grid-cols-3 overflow-hidden">
        <Image src={uno} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={dos} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={tres} alt="uno" className="aspect-square h-full w-full object-cover" />
      </div>
    </div>
  );
};
