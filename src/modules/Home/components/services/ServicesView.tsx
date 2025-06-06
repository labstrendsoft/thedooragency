import { CardService } from './CardService';
import { servicios } from '../../data/Service';
import ButtonLinkTheDoorAgency from '@/common/components/customize/ButtonLinkTheDoorAgency';

export const ServicesView = () => {
  return (
    <div className="mx-auto max-w-[1200px] py-20">
      {/* Título animado */}
      <h3 className="text-thedooragency-negro mb-2 text-center text-2xl font-black md:text-[32px]">
        NUESTROS SERVICIOS
      </h3>

      {/* Descripción animada */}
      <p className="text-thedooragency-negro mx-auto mb-6 max-w-[350px] text-center text-sm text-balance sm:text-base">
        Impulsa tu marca con nuestros servicios especializados por nuestros profesionales.
      </p>

      {/* Botón animado */}
      <div className="mb-16 flex items-center justify-center">
        <ButtonLinkTheDoorAgency href="/contacto" variant="filled" className="w-full max-w-fit">
          Entrar en Contacto
        </ButtonLinkTheDoorAgency>
      </div>

      {/* Grid de servicios animado */}
      <div className="mx-auto mb-8 grid max-w-[1000px] grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:gap-16 xl:px-0">
        {servicios.map((servicio, index) => (
          <div key={index}>
            <CardService
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
              id={servicio.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
