import React from 'react';
import AboutStyles from '../styles/about.module.css';
import { cn } from '@root/src/lib/utils';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import Link from 'next/link';

export const Portada = () => {
  return (
    <section className={cn(AboutStyles.fondoBanner1, 'relative z-10')}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <h1 className="text-[40px] leading-none font-black text-white">SOBRE NOSOTROS</h1>
        <p className="max-w-[400px] text-center text-sm text-white">
          Conoce quiénes somos, cómo trabajamos y por qué somos el aliado ideal para tu marca.
        </p>
      </div>
      <Link
        href="#sobre-nosotros"
        className="animate-scroll-down absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <Image src={ArrowLeft} alt="arrow left" className="w-3 -rotate-90 object-cover" />
      </Link>
    </section>
  );
};
