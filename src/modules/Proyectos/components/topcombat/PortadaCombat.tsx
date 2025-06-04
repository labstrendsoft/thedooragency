import React from 'react';
import ContactStyles from '../../styles/proyectos.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const PortadaCombat = () => {
  return (
    <section className={cn(ContactStyles.fondoBanner2, 'relative z-10 h-[calc(100dvh-76px)]')}>
      <div className="fade-in-unique mx-auto flex h-full max-w-[1200px] flex-col items-start justify-center gap-2 px-6 xl:px-0">
        <div className="flex flex-col items-center gap-4 px-6 lg:items-start lg:px-0">
          <h2 className="text-3xl font-black text-white">Top Combat 12 – Angelo Curay</h2>
          <div className="mb-2 flex flex-wrap gap-3 md:gap-x-4 md:gap-y-1">
            <div className="relative flex items-center gap-2 text-xs text-white/80 lg:text-sm">
              <span className="absolute top-[20%] -translate-y-1/2 text-2xl leading-none font-black">
                .
              </span>
              <div className="pl-3">Producción Audiovisual</div>
            </div>
          </div>
          <div>
            <p className="mb-4 max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              Realizamos la pieza audiovisual de presentación oficial para el peleador peruano
              Angelo Curay, con motivo de su participación en el evento Top Combat 12 en la
              disciplina de muay thai.
            </p>
            <p className="max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              El video retrata su preparación, mentalidad y entrenamiento en los días previos al
              combate, incluyendo testimonios de su entrenador y compañeros de equipo. La narrativa
              buscó conectar emocionalmente con la audiencia, mostrando no solo al atleta, sino a la
              persona detrás del ring.
            </p>
            <p className="max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              La pieza tuvo gran acogida durante su presentación, logrando generar impacto y
              expectativa alrededor de su participación en el evento.
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
