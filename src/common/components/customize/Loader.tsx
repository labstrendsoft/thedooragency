'use client';

import Image from 'next/image';
import Puerta from '@public/puerta.webp';

export default function LogoRevealLoader() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative flex h-[200px] w-[200px] animate-pulse flex-col items-center justify-center gap-2">
        {/* Círculo giratorio */}

        <Image src={Puerta} alt="Logo" className="rounded-full object-cover" />
        <div className="loadingtext">
          <p className="text-sm">Cargando</p>
        </div>
      </div>
    </div>
  );
}
