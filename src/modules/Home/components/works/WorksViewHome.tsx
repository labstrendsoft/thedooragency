'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../data/Trabajos';
import Image from 'next/image';
import ButtonLinkTheDoorAgency from '@/common/components/customize/ButtonLinkTheDoorAgency';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const WorksViewHome = () => {
  return (
    <div className="bg-thedooragency-negro py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="mx-auto max-w-[1200px]">
          <motion.h3
            className="mb-2 text-center text-2xl font-black text-white md:text-[32px]"
            variants={itemVariants}
          >
            NUESTROS TRABAJOS
          </motion.h3>

          <motion.p
            className="mx-auto mb-6 max-w-[600px] px-6 text-center text-sm text-balance text-white sm:px-0 sm:text-base"
            variants={itemVariants}
          >
            Conoce algunos de los proyectos que hemos desarrollado para marcas de distintos rubros.
            Cada uno refleja nuestra pasión por las ideas creativas, la estrategia y los resultados
            reales.
          </motion.p>

          <motion.div className="mb-20 flex items-center justify-center" variants={itemVariants}>
            <ButtonLinkTheDoorAgency
              href="/trabajos"
              variant="outline"
              className="w-full max-w-fit"
            >
              Ver trabajos
            </ButtonLinkTheDoorAgency>
          </motion.div>
        </div>
      </motion.div>

      <div className="mx-auto max-w-[1000px] columns-2 gap-3 px-6 xl:px-0">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="mb-3 overflow-hidden rounded-lg shadow-md"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              placeholder="blur"
              className="w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
