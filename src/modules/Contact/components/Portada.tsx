import React from 'react';
// import ContactStyles from '../styles/contact.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import fondo from '@public/contact/contacto.webp';

export const Portada = () => {
  return (
    <section className="relative z-10 h-[calc(100dvh-76px)] w-full">
      <Image
        src={fondo}
        alt="fondo de combat"
        className="object-cover"
        fill
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAADQAwCdASogABAAPpE6l0eloyIhMAgAsBIJaQAOcAwRffVSOd5UOQAA/v7pBVf27ehedilMXwDmoxUo5TpvpwFPgg9CcmfT3FOoUo9bbpesBep2ffHdMCYMQN5lLp8l00p3b6UlILTQnA0fScDO8+yVW2d/IoVuAAA="
      />
      <div className="fade-in-unique absolute inset-0 flex flex-col items-center justify-center gap-2">
        <h1 className="max-w-[350px] text-center text-2xl leading-tight font-black text-white md:text-[40px]">
          CONTÁCTATE CON NOSOTROS
        </h1>
      </div>
      <a
        href="#contacto"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hover:opacity-70"
      >
        <Image src={ArrowLeft} alt="arrow left" className="w-3 -rotate-90 object-cover" />
      </a>
    </section>
  );
};
