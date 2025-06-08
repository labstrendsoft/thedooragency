import React from 'react';
// import ServiciosStyles from '../styles/servicios.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import Link from 'next/link';
import fondo from '@public/service/fondoServicio.webp';

export const PortadaServicios = () => {
  return (
    <section className="relative z-10 h-[calc(100dvh-76px)] w-full">
      <Image
        src={fondo}
        alt="fondo de combat"
        className="object-cover"
        fill
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRtQAAABXRUJQVlA4IMgAAABwBACdASogABAAPpE4l0eloyIhMAgAsBIJaQAD4zIR+oFi09iG5HO9qKhcMAD++m7tu//Q8myKu7PWWXNeQvqEN4J7D+D+1f++qeM8azE+hy/Uu6zpr4rmBc+gzM7DtmcSokyt3eyvgtacLQKX7cX/B52sXBK47YxphLsCxGWNpIVcICSfF0D+0G87DX8ppzjG2hld4s6k2eI/K3kluvOa1cMiRP5lKiU1X9u7+/Ojpw46YymJj79hfr/t0BEOarLQ92k4eQAAAA=="
      />
      <div className="fade-in-unique absolute inset-0 flex flex-col items-center justify-center gap-2">
        <h1 className="text-center text-2xl leading-none font-black text-white md:text-[40px]">
          LO QUE HACEMOS
        </h1>
        <p className="max-w-[400px] px-6 text-center text-sm text-white lg:px-0">
          En The Door Agency ayudamos a construir y potenciar marcas desde la idea hasta su
          ejecución.
        </p>
      </div>
      <Link
        href="#nuestros-servicios"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hover:opacity-70"
      >
        <Image src={ArrowLeft} alt="arrow left" className="w-3 -rotate-90 object-cover" />
      </Link>
    </section>
  );
};
