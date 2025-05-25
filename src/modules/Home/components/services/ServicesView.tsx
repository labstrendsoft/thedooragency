'use client';
import { motion } from 'framer-motion';
import { CardService } from './CardService';
import { servicios } from '../../data/Service';
import ButtonLinkTheDoorAgency from '@/common/components/customize/ButtonLinkTheDoorAgency';

// Variantes de animación para el contenedor principal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

// Variantes para elementos individuales
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
    },
  },
};

// Variantes para las tarjetas de servicios
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const ServicesView = () => {
  return (
    <motion.div
      className="mx-auto max-w-[1200px] py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Título animado */}
      <motion.h3
        className="text-thedooragency-negro mb-2 text-center text-2xl font-black md:text-[32px]"
        variants={itemVariants}
      >
        NUESTROS SERVICIOS
      </motion.h3>

      {/* Descripción animada */}
      <motion.p
        className="text-thedooragency-negro mx-auto mb-6 max-w-[350px] text-center text-sm text-balance sm:text-base"
        variants={itemVariants}
      >
        Impulsa tu marca con nuestros servicios especializados por nuestros profesionales.
      </motion.p>

      {/* Botón animado */}
      <motion.div className="mb-16 flex items-center justify-center" variants={itemVariants}>
        <ButtonLinkTheDoorAgency href="/contacto" variant="filled" className="w-full max-w-fit">
          Entrar en Contacto
        </ButtonLinkTheDoorAgency>
      </motion.div>

      {/* Grid de servicios animado */}
      <motion.div
        className="mx-auto mb-8 grid max-w-[1000px] grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:gap-16 xl:px-0"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {servicios.map((servicio, index) => (
          <motion.div key={index} variants={cardVariants}>
            <CardService titulo={servicio.titulo} descripcion={servicio.descripcion} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
