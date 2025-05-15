import React from 'react';
import AboutStyles from '../styles/about.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Portada = () => {
  return (
    <section
      className={cn(AboutStyles.fondoBanner1, 'relative z-10 h-[50vh] md:h-[65vh] lg:h-[75vh]')}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <h1 className="tracking-in-contract text-center text-2xl leading-none font-black text-white md:text-[40px]">
          SOBRE NOSOTROS
        </h1>
        <p className="max-w-[400px] px-6 text-center text-sm text-white lg:px-0">
          Conoce quiénes somos, cómo trabajamos y por qué somos el aliado ideal para tu marca.
        </p>
      </div>
      <Link
        href="#sobre-nosotros"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <Image src={ArrowLeft} alt="arrow left" className="w-3 -rotate-90 object-cover" />
      </Link>
    </section>
  );
};
