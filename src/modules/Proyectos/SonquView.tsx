import React from 'react';
import YoutubeLite from './components/videoYoutube';
import uno from '@public/works/sonqu/1.webp';
import dos from '@public/works/sonqu/2.webp';
import Image from 'next/image';
import { PortadaSonqu } from './components/sonqu/PortadaSonqu';
export const SonquView = () => {
  return (
    <div className="bg-thedooragency-negro">
      <PortadaSonqu />
      <section id="video-blue" className="mx-auto max-w-[800px] px-6 pt-10 lg:px-0">
        <YoutubeLite url="https://www.youtube.com/watch?v=DLB_CEbBHnM" />
      </section>
      <div className="mx-auto max-w-[1200px] px-6 py-10 lg:px-0">
        <Image
          src={uno}
          alt="uno"
          className="aspect-video rounded-md border border-gray-100/30 object-cover"
        />
      </div>
      <div className="mx-auto max-w-[1200px] px-6 pb-10 lg:px-0">
        <Image
          src={dos}
          alt="uno"
          className="aspect-video rounded-md border border-gray-100/30 object-cover"
        />
      </div>
    </div>
  );
};
