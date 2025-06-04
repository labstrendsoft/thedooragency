import React from 'react';
import YoutubeLite from './components/videoYoutube';
import uno from '@public/works/topCombat/1.webp';
import dos from '@public/works/topCombat/2.webp';
import tres from '@public/works/topCombat/3.webp';
import Image from 'next/image';
import { PortadaCombat } from './components/topcombat/PortadaCombat';
export const TopcombatView = () => {
  return (
    <div className="bg-thedooragency-negro">
      <PortadaCombat />
      <section id="video-blue" className="mx-auto max-w-[800px] px-6 py-10 lg:px-0">
        <YoutubeLite url="https://www.youtube.com/watch?v=jvRicFNkIT8" />
      </section>

      <div className="grid w-full grid-cols-[1fr_1.5fr_1fr] overflow-hidden xl:h-[calc(100dvh-76px-69px)]">
        <Image src={tres} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={uno} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={dos} alt="uno" className="aspect-square h-full w-full object-cover" />
      </div>
    </div>
  );
};
