import React from 'react';
import YoutubeLite from './components/videoYoutube';
import uno from '@public/works/birds/1.webp';
import dos from '@public/works/birds/2.webp';
import tres from '@public/works/birds/3.webp';
import cuatro from '@public/works/birds/4.webp';
import cinco from '@public/works/birds/5.webp';
import seis from '@public/works/birds/6.webp';
import b1 from '@public/works/birds/b1.webp';

import Image from 'next/image';
import { PortadaBirds } from './components/birds/PortadaBirds';
export const BirdsView = () => {
  return (
    <div className="bg-thedooragency-negro">
      <PortadaBirds />

      <section
        id="video-blue"
        className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-2 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:h-[calc(100dvh-76px)] xl:items-center xl:justify-center xl:px-0"
      >
        <YoutubeLite url="https://www.youtube.com/shorts/yaeNBEAO6Zg" />
        <YoutubeLite url="https://www.youtube.com/shorts/yaeNBEAO6Zg" />
        <YoutubeLite url="https://www.youtube.com/shorts/yaeNBEAO6Zg" />
      </section>
      <div className="grid w-full grid-cols-3 overflow-hidden xl:h-[calc(100dvh-76px)]">
        <Image src={tres} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={dos} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={uno} alt="uno" className="aspect-square h-full w-full object-cover" />
      </div>

      <div className="xl:h-[calc(100dvh-76px)]">
        <Image src={b1} alt="uno" className="aspect-video object-cover" />
      </div>
      <div className="grid w-full grid-cols-3 overflow-hidden xl:h-[calc(100dvh-76px-69px)]">
        <Image src={cuatro} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={cinco} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={seis} alt="uno" className="aspect-square h-full w-full object-cover" />
      </div>
    </div>
  );
};
