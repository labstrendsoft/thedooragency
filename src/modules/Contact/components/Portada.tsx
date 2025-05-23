import React from 'react';
import ContactStyles from '../styles/contact.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Portada = () => {
  return (
    <section className={cn(ContactStyles.fondoBanner1, 'relative z-10 h-[calc(100dvh-64px)]')}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <h1 className="max-w-[350px] text-center text-2xl leading-tight font-black text-white md:text-[40px]">
          CONTÁCTATE CON NOSOTROS
        </h1>
      </div>
      <Link href="#contacto" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <Image src={ArrowLeft} alt="arrow left" className="w-3 -rotate-90 object-cover" />
      </Link>
    </section>
  );
};
