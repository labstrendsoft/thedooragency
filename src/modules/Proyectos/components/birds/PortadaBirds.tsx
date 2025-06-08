import React from 'react';
// import ContactStyles from '../../styles/proyectos.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import fondo from '@public/works/birds/banner.webp';

export const PortadaBirds = () => {
  return (
    <section className="relative z-10 h-[calc(100dvh-76px)] w-full">
      <Image
        src={fondo}
        alt="fondo de combat"
        className="object-cover"
        fill
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRjYBAABXRUJQVlA4ICoBAAAwBQCdASogABAAPpE4l0eloyIhMAgAsBIJbAC7DiAN4wRoGzZTAFQPla7rQY4dIOTcAAD+/Sn0YhV27dbu3mpV/+TPA9GXMhywC7/sc++psK7N6t/5z8MFJbuOTV7DekrDeuGpffurdzfsJRiuo34Re+/rD5t6oln+cDHY2V81YyDze4xPv2skwCQVDeNUKfnHM6VaJmYuLh2iEb+Ez//DoazTeGfE97NTG/+VLS33+SOcGPkxHvYRNEI753JNrUjHLOHXA5sQ2G3OOUPo6LtZzL5TmoGes+DgdWgdgknKNDrNdc6dN4T3T+/0edK0z/9vlX2Gqc3QfNKTWiFv4SZSj+bte5rlpLbX6L0DRgPnvEicqJccGf37e7WsSiicXdlIhToZA6vzjAAA"
      />
      <div className="fade-in-unique mx-auto flex h-full max-w-[1200px] flex-col items-start justify-center gap-2 px-6 xl:px-0">
        <div className="flex flex-col items-center gap-4 px-6 lg:items-start lg:px-0">
          <h2 className="text-center text-3xl font-black text-white">Birds Luxury Flowers</h2>
          <div className="mb-2 flex flex-wrap items-center justify-center gap-3 md:gap-x-4 md:gap-y-1">
            <div className="relative flex items-center gap-2 text-xs text-white/80 lg:text-sm">
              <span className="absolute top-[20%] -translate-y-1/2 text-2xl leading-none font-black">
                .
              </span>
              <div className="pl-3">Producción Audiovisual</div>
            </div>
            <div className="relative flex items-center gap-2 text-xs text-white/80 lg:text-sm">
              <span className="absolute top-[20%] -translate-y-1/2 text-2xl leading-none font-black">
                .
              </span>
              <div className="pl-3">Marketing Digital</div>
            </div>
            <div className="relative flex items-center gap-2 text-xs text-white/80 lg:text-sm">
              <span className="absolute top-[20%] -translate-y-1/2 text-2xl leading-none font-black">
                .
              </span>
              <div className="pl-3">Branding</div>
            </div>
            <div className="relative flex items-center gap-2 text-xs text-white/80 lg:text-sm">
              <span className="absolute top-[20%] -translate-y-1/2 text-2xl leading-none font-black">
                .
              </span>
              <div className="pl-3">Desarrollo Web</div>
            </div>
          </div>
          <div>
            <p className="mb-4 max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              Creamos Birds Luxury Flowers desde cero, desarrollando la identidad visual y
              conceptual de la marca: nombre, logo, universo gráfico y tono de comunicación.
              Posteriormente, trabajamos una campaña de Halloween para posicionar la florería con
              una propuesta creativa y diferenciadora.
            </p>
            <p className="max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              Lanzamos cuatro colecciones exclusivas inspiradas en personajes icónicos como Chucky,
              Tiffany, Drácula y Frankenstein, combinando arte, concepto y floristería de lujo. La
              campaña incluyó contenido audiovisual, estrategia digital y gestión de redes sociales.
              Como resultado, Birds Luxury Flowers logró un aumento del 60% en ventas durante la
              campaña y consolidó su presencia en el mercado como una marca de flores premium con
              narrativa visual única.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white">Duración:</span>
            <span className="text-white/80">3 meses</span>
          </div>
        </div>
      </div>
      <a
        href="#video-blue"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hover:opacity-70"
      >
        <Image src={ArrowLeft} alt="arrow left" className="w-3 -rotate-90 object-cover" />
      </a>
    </section>
  );
};
