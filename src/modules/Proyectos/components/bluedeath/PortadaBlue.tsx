import React from 'react';
import ContactStyles from '../../styles/proyectos.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const PortadaBlue = () => {
  return (
    <section className={cn(ContactStyles.fondoBanner1, 'relative z-10 h-[calc(100dvh-76px)]')}>
      <div className="fade-in-unique mx-auto flex h-full max-w-[1200px] flex-col items-start justify-center gap-2 px-6 xl:px-0">
        <div className="flex flex-col items-center gap-4 px-6 lg:items-start lg:px-0">
          <h2 className="text-3xl font-black text-white">Blue Death</h2>
          <div className="mb-2 flex flex-wrap gap-3 md:gap-x-4 md:gap-y-1">
            <div className="relative flex items-center gap-2 text-xs text-white/80 lg:text-sm">
              <span className="absolute top-[20%] -translate-y-1/2 text-2xl leading-none font-black">
                .
              </span>
              <div className="pl-3">Marketing Digital</div>
            </div>
            <div className="relative flex items-center gap-2 text-sm text-white/80">
              <span className="absolute top-[20%] -translate-y-1/2 text-2xl leading-none font-black">
                .
              </span>
              <div className="pl-3">Marketing Digital</div>
            </div>
          </div>
          <div>
            <p className="mb-4 max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              Trabajamos el posicionamiento de Blue Death como una marca de agua enlatada dirigida a
              deportistas extremos y de alto riesgo, resaltando una identidad fresca, intensa y
              cool.
            </p>
            <p className="max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              Desarrollamos una campaña de marketing digital y contenido audiovisual en colaboración
              con atletas profesionales de disciplinas como surf, muay thai, longboard y lucha de
              brazos, conectando con audiencias auténticas y afines al espíritu de la marca. El
              resultado fue un crecimiento significativo en el reconocimiento y alcance dentro de
              estos nichos, logrando aumentar el consumo del producto a través de redes sociales y
              consolidar su presencia en estos sectores.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white">Duración:</span>
            <span className="text-white/80">3 meses</span>
          </div>
        </div>
      </div>
      <a
        href="#video-blue"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hover:opacity-70"
      >
        <Image src={ArrowLeft} alt="arrow left" className="w-3 -rotate-90 object-cover" />
      </a>
    </section>
  );
};
