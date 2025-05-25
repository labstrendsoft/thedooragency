'use client';
import React from 'react';
import ServiciosStyles from '../styles/servicios.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const PortadaServicios = () => {
  return (
    <section className="relative z-10 h-[calc(100dvh-76px)]">
      <div className={cn(ServiciosStyles.fondoBanner1, 'absolute inset-0 z-0')} />
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-center text-2xl leading-none font-black text-white md:text-[40px]">
          LO QUE HACEMOS
        </h1>
        <p className="max-w-[400px] px-6 text-center text-sm text-white lg:px-0">
          En The Door Agency ayudamos a construir y potenciar marcas desde la idea hasta su
          ejecución.
        </p>
      </motion.div>
      <Link
        href="#nuestros-servicios"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hover:opacity-70"
      >
        <Image src={ArrowLeft} alt="arrow left" className="w-3 -rotate-90 object-cover" />
      </Link>
    </section>
  );
};
