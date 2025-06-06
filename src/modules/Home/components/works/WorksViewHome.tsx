import React from 'react';
import { images } from '../../data/Trabajos';
import Image from 'next/image';
import ButtonLinkTheDoorAgency from '@/common/components/customize/ButtonLinkTheDoorAgency';

export const WorksViewHome = () => {
  return (
    <div className="bg-thedooragency-negro py-20">
      <div className="mx-auto max-w-[1200px]">
        <h3 className="mb-2 text-center text-2xl font-black text-white md:text-[32px]">
          NUESTROS TRABAJOS
        </h3>

        <p className="mx-auto mb-6 max-w-[600px] px-6 text-center text-sm text-balance text-white sm:px-0 sm:text-base">
          Conoce algunos de los proyectos que hemos desarrollado para marcas de distintos rubros.
          Cada uno refleja nuestra pasión por las ideas creativas, la estrategia y los resultados
          reales.
        </p>

        <div className="mb-20 flex items-center justify-center">
          <ButtonLinkTheDoorAgency href="/trabajos" variant="outline" className="w-full max-w-fit">
            Ver trabajos
          </ButtonLinkTheDoorAgency>
        </div>
      </div>

      <div className="mx-auto max-w-[1000px] columns-2 gap-3 px-6 xl:px-0">
        {images.map((img, index) => (
          <div key={index} className="mb-3 overflow-hidden rounded-lg shadow-md">
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              placeholder="blur"
              className="w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
