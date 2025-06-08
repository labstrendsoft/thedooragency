import React from 'react';
// import ContactStyles from '../../styles/proyectos.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import fondo from '@public/works/olympus/banner.webp';

export const PortadaOlympus = () => {
  return (
    <section className="relative z-10 h-[calc(100dvh-76px)] w-full">
      <Image
        src={fondo}
        alt="fondo de combat"
        className="object-cover"
        fill
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRuAAAABXRUJQVlA4INQAAACwBACdASogABAAPpE4l0eloyIhMAgAsBIJZQAFEB7acCr2stB1xyEQPf9UVqjAAP7/gD7HtaR7QIP4GWbcpYumz8WGYBKP9/vSCNpA9MK3yBlGaXKRpKcJT7bOvNoKuIM0kR05ELkXlmPon9gq9YqaeRxdkTGREAkORAAFoY+r8fbJQgyCXcQ3b5f7Lz8GU3zRPB8H2xFRgeGAj+Sfk3qwoUe7z0ynutuJm1e0nV4IOt3w5NGloPaHrijeE0n2biRW3eGXB7P1mJ3wBYGksc+twVAAAA=="
      />
      <div className="fade-in-unique mx-auto flex h-full max-w-[1200px] flex-col items-start justify-center gap-2 px-6 xl:px-0">
        <div className="flex flex-col items-center gap-4 px-6 lg:items-start lg:px-0">
          <h2 className="text-3xl font-black text-white">Olympus Club</h2>
          <div className="mb-2 flex flex-wrap items-center justify-center gap-3 md:gap-x-4 md:gap-y-1">
            <div className="relative flex items-center gap-2 text-xs text-white/80 lg:text-sm">
              <span className="absolute top-[20%] -translate-y-1/2 text-2xl leading-none font-black">
                .
              </span>
              <div className="pl-3">Producción Audiovisual</div>
            </div>
            <div className="relative flex items-center gap-2 text-xs text-white/80 lg:text-sm">
              <span className="absolute top-[20%] -translate-y-1/2 text-2xl leading-none font-black">
                .
              </span>
              <div className="pl-3">Marketing Digital</div>
            </div>
            <div className="relative flex items-center gap-2 text-xs text-white/80 lg:text-sm">
              <span className="absolute top-[20%] -translate-y-1/2 text-2xl leading-none font-black">
                .
              </span>
              <div className="pl-3">Branding</div>
            </div>
            <div className="relative flex items-center gap-2 text-xs text-white/80 lg:text-sm">
              <span className="absolute top-[20%] -translate-y-1/2 text-2xl leading-none font-black">
                .
              </span>
              <div className="pl-3">Desarrollo Web</div>
            </div>
          </div>
          <div>
            <p className="mb-4 max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              El reto fue crear desde cero Olympus Club, un club deportivo especializado en lucha de
              brazos. Nos encargamos del desarrollo integral de la marca: naming, diseño de logo,
              identidad visual, estrategia de comunicación y presencia digital.
            </p>
            <p className="max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              Construimos una comunidad activa en redes sociales, diseñamos su página web y
              generamos contenido audiovisual que destacara el entrenamiento, eventos y atletas del
              club. Gracias a esta estrategia, Olympus Club logró posicionarse rápidamente como una
              marca sólida y referente en el deporte de lucha de brazos en Perú, consolidando su
              presencia tanto a nivel competitivo como en medios digitales.
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
