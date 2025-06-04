import React from 'react';
import { PortadaBlue } from './components/bluedeath/PortadaBlue';
import YoutubeLite from './components/videoYoutube';
import uno from '@public/works/1.webp';
import dos from '@public/works/2.webp';
import tres from '@public/works/3.webp';
import Image from 'next/image';
export const BluedeathView = () => {
  return (
    <div className="bg-thedooragency-negro">
      <PortadaBlue />
      <section id="video-blue" className="mx-auto max-w-[800px] px-6 py-10 lg:px-0">
        <YoutubeLite url="https://www.youtube.com/watch?v=jvRicFNkIT8" />
      </section>
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-2 px-6 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:px-0">
        <YoutubeLite url="https://www.youtube.com/shorts/yaeNBEAO6Zg" />
        <YoutubeLite url="https://www.youtube.com/shorts/yaeNBEAO6Zg" />
        <YoutubeLite url="https://www.youtube.com/shorts/yaeNBEAO6Zg" />
      </div>
      <div className="grid w-full grid-cols-[1fr_1.5fr_1fr] overflow-hidden xl:h-[calc(100dvh-76px-69px)]">
        <Image src={dos} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={tres} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={uno} alt="uno" className="aspect-square h-full w-full object-cover" />
      </div>
    </div>
  );
};
