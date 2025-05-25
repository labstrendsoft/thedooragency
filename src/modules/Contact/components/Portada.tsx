'use client';

import React from 'react';
import ContactStyles from '../styles/contact.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const Portada = () => {
  return (
    <section className={cn(ContactStyles.fondoBanner1, 'relative z-10 h-[calc(100dvh-76px)]')}>
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="max-w-[350px] text-center text-2xl leading-tight font-black text-white md:text-[40px]">
          CONTÁCTATE CON NOSOTROS
        </h1>
      </motion.div>
      <a
        href="#contacto"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hover:opacity-70"
      >
        <Image src={ArrowLeft} alt="arrow left" className="w-3 -rotate-90 object-cover" />
      </a>
    </section>
  );
};
