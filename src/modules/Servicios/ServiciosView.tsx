'use client';
import React from 'react';
import { PortadaServicios } from './components/Portada';
import ButtonLinkTheDoorAgency from '@/common/components/customize/ButtonLinkTheDoorAgency';
import { ServiceComponent } from './components/ServiceComponent';
import { motion } from 'framer-motion';

export const ServiciosView = () => {
  return (
    <main>
      <PortadaServicios />
      <section id="nuestros-servicios" className="mx-auto max-w-[1200px] pt-16">
        <motion.h3
          className="text-thedooragency-negro mb-2 text-center text-2xl font-black md:text-[32px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          NUESTROS SERVICIOS
        </motion.h3>
        <motion.p
          className="text-thedooragency-negro mx-auto mb-6 max-w-[350px] text-center text-sm text-balance sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          Impulsa tu marca con nuestros servicios especializados por nuestros profesionales.
        </motion.p>
        <motion.div
          className="mb-14 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ButtonLinkTheDoorAgency href="/contacto" variant="filled" className="w-full max-w-fit">
            Entrar en Contacto
          </ButtonLinkTheDoorAgency>
        </motion.div>
      </section>
      <ServiceComponent />
    </main>
  );
};
