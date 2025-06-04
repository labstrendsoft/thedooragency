import React from 'react';
import YoutubeLite from './components/videoYoutube';
import uno from '@public/works/soperia/1.webp';
import dos from '@public/works/soperia/2.webp';
import tres from '@public/works/soperia/3.webp';
import cuatro from '@public/works/soperia/4.webp';
import cinco from '@public/works/soperia/5.webp';
import seis from '@public/works/soperia/6.webp';
import Image from 'next/image';
import { PortadaSoperia } from './components/soperia/PortadaSoperia';
export const SoperiaView = () => {
  return (
    <div className="bg-thedooragency-negro">
      <PortadaSoperia />
      <section id="video-blue" className="mx-auto max-w-[800px] px-6 pt-10 lg:px-0">
        <YoutubeLite url="https://www.youtube.com/watch?v=en6GLX_v7ww" />
      </section>
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-2 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:h-[calc(100dvh-76px)] xl:items-center xl:justify-center xl:px-0">
        <YoutubeLite url="https://www.youtube.com/shorts/yaeNBEAO6Zg" />
        <YoutubeLite url="https://www.youtube.com/shorts/yaeNBEAO6Zg" />
        <YoutubeLite url="https://www.youtube.com/shorts/yaeNBEAO6Zg" />
      </div>
      <div className="grid w-full grid-cols-3 overflow-hidden">
        <Image src={uno} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={cuatro} alt="uno" className="aspect-square h-full w-full object-cover" />

        <Image src={dos} alt="uno" className="aspect-square h-full w-full object-cover" />
      </div>
      <div className="grid w-full grid-cols-3 overflow-hidden">
        <Image src={cinco} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={seis} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={tres} alt="uno" className="aspect-square h-full w-full object-cover" />
      </div>
    </div>
  );
};
