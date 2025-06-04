import React from 'react';
import uno from '@public/works/megapolvos/1.webp';
import dos from '@public/works/megapolvos/2.webp';
import tres from '@public/works/megapolvos/3.webp';
import Image from 'next/image';
import { PortadaMegapolvos } from './components/megapolvos/PortadaMegapolvos';
export const MegapolvosView = () => {
  return (
    <div className="bg-thedooragency-negro">
      <PortadaMegapolvos />

      <section id="megapolvo" className="grid w-full grid-cols-3 overflow-hidden">
        <Image src={tres} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={dos} alt="uno" className="aspect-square h-full w-full object-cover" />
        <Image src={uno} alt="uno" className="aspect-square h-full w-full object-cover" />
      </section>
    </div>
  );
};
