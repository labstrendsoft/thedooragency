import React from 'react';
import Arrow from '@public/Inicio/arrowService.webp';
import Image from 'next/image';
type Props = {
  titulo: string;
  descripcion: string;
};

export const CardService = ({ titulo, descripcion }: Props) => {
  return (
    <div className="border-thedooragency-negro flex flex-col space-y-2 border-b pb-6">
      <h3 className="text-thedooragency-negro text-base font-bold">{titulo}</h3>
      <div className="flex items-center justify-between">
        <p className="text-thedooragency-negro max-w-[400px] text-sm">{descripcion}</p>
        <div className="flex h-10 w-10 items-center justify-center rounded-full">
          <Image src={Arrow} alt="icono de flecha" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};
