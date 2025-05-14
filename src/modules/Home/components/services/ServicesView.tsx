import ButtonLinkTheDoorAgency from '@root/src/common/components/customize/ButtonLinkTheDoorAgency';
import React from 'react';
import { CardService } from './CardService';
import { servicios } from '../../data/Service';

export const ServicesView = () => {
  return (
    <div className="mx-auto max-w-[1200px] py-20">
      <h3 className="text-thedooragency-negro mb-2 text-center text-[32px] font-black">
        NUESTROS SERVICIOS
      </h3>
      <p className="text-thedooragency-negro mx-auto mb-6 max-w-[350px] text-center">
        Impulsa tu marca con nuestros servicios especializados por nuestros profesionales.
      </p>
      <div className="mb-16 flex items-center justify-center">
        <ButtonLinkTheDoorAgency href="/about" variant="filled" className="w-full max-w-fit">
          Entrar en Contacto
        </ButtonLinkTheDoorAgency>
      </div>

      <div className="mx-auto mb-8 grid max-w-[1000px] grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
        {servicios.map((servicio, index) => (
          <CardService key={index} titulo={servicio.titulo} descripcion={servicio.descripcion} />
        ))}
      </div>
    </div>
  );
};
