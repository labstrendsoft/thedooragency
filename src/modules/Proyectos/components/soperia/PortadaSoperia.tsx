import React from 'react';
import ContactStyles from '../../styles/proyectos.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const PortadaSoperia = () => {
  return (
    <section className={cn(ContactStyles.fondoBanner7, 'relative z-10 h-[calc(100dvh-76px)]')}>
      <div className="fade-in-unique mx-auto flex h-full max-w-[1200px] flex-col items-start justify-center gap-2 px-6 xl:px-0">
        <div className="flex flex-col items-center gap-4 px-6 lg:items-start lg:px-0">
          <h2 className="text-center text-3xl font-black text-white">La Sopería</h2>
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
          </div>
          <div>
            <p className="mb-4 max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              El objetivo fue atraer más comensales al restaurante La Sopería mediante una
              estrategia de comunicación digital efectiva. Nos encargamos del manejo de redes
              sociales, campañas promocionales y definición del tono de comunicación, alineado al
              concepto del local.
            </p>
            <p className="max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              Como parte de la estrategia, creamos el segmento original &quot;Mete tu cuchara&quot;,
              que integró a los dueños del restaurante como voceros de la marca, aportando cercanía,
              autenticidad y conexión con la audiencia.El proyecto logró mejorar notablemente el
              posicionamiento de La Sopería en redes sociales, generando mayor reconocimiento y
              afluencia en el local.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white">Duración:</span>
            <span className="text-white/80">4 meses</span>
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
