import React from 'react';
import { PortadaServicios } from './components/Portada';
import ButtonLinkTheDoorAgency from '@/common/components/customize/ButtonLinkTheDoorAgency';
import { ServiceComponent } from './components/ServiceComponent';

export const ServiciosView = () => {
  return (
    <main>
      <PortadaServicios />
      <section id="nuestros-servicios" className="mx-auto max-w-[1200px] pt-16">
        <h3 className="text-thedooragency-negro mb-2 text-center text-2xl font-black md:text-[32px]">
          NUESTROS SERVICIOS
        </h3>
        <p className="text-thedooragency-negro mx-auto mb-6 max-w-[350px] text-center text-sm text-balance sm:text-base">
          Impulsa tu marca con nuestros servicios especializados por nuestros profesionales.
        </p>
        <div className="mb-14 flex items-center justify-center">
          <ButtonLinkTheDoorAgency href="/contacto" variant="filled" className="w-full max-w-fit">
            Entrar en Contacto
          </ButtonLinkTheDoorAgency>
        </div>
      </section>
      <ServiceComponent />
    </main>
  );
};
