import React from 'react';
import ArrowLeft from '@public/arrow1.webp';
import WorksStyles from '../styles/trabajo.module.css';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export const PortadaTrabajo = () => {
  return (
    <section className={cn(WorksStyles.fondoBanner1, 'relative z-10 h-[calc(100vh-81px)]')}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <h1 className="tracking-in-contract mb-1 text-center text-2xl leading-none font-black text-white md:text-[40px]">
          NUESTROS TRABAJOS
        </h1>
        <p className="max-w-[700px] px-6 text-center text-sm text-white lg:px-0">
          Te invitamos a conocer nuestro portafolio, una muestra de proyectos que reflejan nuestro
          enfoque creativo, estratégico y orientado a resultados. Cada trabajo representa nuestro
          compromiso con la calidad, la innovación y la personalización. Desde sitios web hasta
          campañas de marketing digital, aquí verás cómo convertimos ideas en soluciones reales que
          conectan con las audiencias y cumplen objetivos.
        </p>
      </div>
      <Link
        href="#nuestros-trabajos"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <Image src={ArrowLeft} alt="arrow left" className="w-3 -rotate-90 object-cover" />
      </Link>
    </section>
  );
};
