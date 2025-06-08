import React from 'react';
// import AboutStyles from '../styles/about.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import fondo from '@public/about/banner.webp';

export const Portada = () => {
  return (
    <section className="relative z-10 h-[calc(100dvh-76px)] w-full">
      <Image
        src={fondo}
        alt="fondo de combat"
        className="object-cover"
        fill
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRtwAAABXRUJQVlA4INAAAAAQBQCdASogABAAPpE6l0eloyIhMAgAsBIJZwC/P2pVWA6xuZh8u7MQyQLMp7nljJgAAP7/iGTfv4s+HNY3hKrP3aaP+G18UNzYvDvd/s707C7NuNJ7ax52bamqI79k9Jj0NoIdlrn/yiqFyUPCqM2VfJJf0QbL/xyrb5kdCSdbuyi5xOqWHYoGRgF/oQ3r7qOWQd8dq8esUuYZaj/g0mo3LSmD9e9IKwLYenXkvILoVJiwDipILuoDM/lKz1FLL3NUhoDc93xfh2f/FHz0MAAA"
      />
      <div className="fade-in-unique absolute inset-0 flex flex-col items-center justify-center gap-2">
        <h2 className="text-center text-2xl leading-none font-black text-white md:text-[40px]">
          SOBRE NOSOTROS
        </h2>
        <p className="max-w-[400px] px-6 text-center text-sm text-white lg:px-0">
          Conoce quiénes somos, cómo trabajamos y por qué somos el aliado ideal para tu marca.
        </p>
      </div>
      <a
        href="#sobre-nosotros"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hover:opacity-70"
      >
        <Image src={ArrowLeft} alt="arrow left" className="w-3 -rotate-90 object-cover" />
      </a>
    </section>
  );
};
