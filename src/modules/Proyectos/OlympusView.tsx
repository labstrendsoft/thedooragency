import React from 'react';
import YoutubeLite from './components/videoYoutube';
import b1 from '@public/works/olympus/b1.webp';

import uno from '@public/works/olympus/1.webp';
import b2 from '@public/works/olympus/b2.webp';
import dos from '@public/works/olympus/2.webp';
import tres from '@public/works/olympus/3.webp';
import Image from 'next/image';
import { PortadaOlympus } from './components/olympus/PortadaOlymppus';
export const OlympusView = () => {
  return (
    <div className="bg-thedooragency-negro">
      <PortadaOlympus />
      <div className="mx-auto grid w-full max-w-[600px] grid-cols-2 gap-2 px-6 pt-10 xl:px-0">
        <YoutubeLite url="https://www.youtube.com/shorts/v_0qagPtZSI" />
        <YoutubeLite url="https://www.youtube.com/shorts/bQDhae8tbkI" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-10 lg:px-0">
        <Image
          src={b2}
          alt="uno"
          className="aspect-video rounded-md border border-gray-100/30 object-cover"
        />
      </div>
      <div className="mx-auto max-w-[1200px] px-6 pb-10 lg:px-0">
        <Image
          src={b1}
          alt="uno"
          className="aspect-video rounded-md border border-gray-100/30 object-cover"
        />
      </div>
      <div className="grid w-full grid-cols-[1fr_1.5fr_1fr] overflow-hidden xl:h-[calc(100dvh-76px-69px)]">
        <Image src={dos} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={tres} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={uno} alt="uno" className="aspect-square h-full w-full object-cover" />
      </div>
    </div>
  );
};
