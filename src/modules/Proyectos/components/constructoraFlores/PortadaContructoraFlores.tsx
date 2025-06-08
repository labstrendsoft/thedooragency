import React from 'react';
// import ContactStyles from '../../styles/proyectos.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import fondo from '@public/works/constructoraFlores/banner.webp';

export const PortadaConstructoraFlores = () => {
  return (
    <section className="relative z-10 h-[calc(100dvh-76px)] w-full">
      <Image
        src={fondo}
        alt="fondo de combat"
        className="object-cover"
        fill
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAAAQBACdASogABAAPpE4l0eloyIhMAgAsBIJYgDCgGlfitkzk5Prj29OAAD+/5Mf2ctZd2N+L5Nu+P3fpidoD60/Pj0Myj05QebXlRfMD9Qt0idP4jyw/wHyOlcFtCDIv5ZrDIGyLYs402QIZ4n8STAwF1c3jmV0fZ5FXni1AAA="
      />
      <div className="fade-in-unique mx-auto flex h-full max-w-[1200px] flex-col items-start justify-center gap-2 px-6 xl:px-0">
        <div className="flex flex-col items-center gap-4 px-6 lg:items-start lg:px-0">
          <h2 className="text-center text-3xl font-black text-white">Constructora Flores</h2>
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
          </div>
          <div>
            <p className="mb-4 max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              El objetivo fue posicionar a Constructora Flores como una empresa sólida y profesional
              en el sector, destacando sus obras, procesos y valores a través de una estrategia de
              comunicación integral.
            </p>
            <p className="max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              Nos encargamos del manejo completo de redes sociales, desarrollando contenido que
              mostrara el trabajo en obra desde una perspectiva cercana: el día a día de los
              obreros, los protocolos de seguridad, avances de proyectos y cultura organizacional.
              También diseñamos su página web, creando un portafolio profesional y funcional.
            </p>
            <p className="max-w-[500px] text-center text-xs leading-snug text-balance text-white lg:text-start lg:text-sm">
              La estrategia permitió humanizar la marca y fortalecer su imagen ante potenciales
              clientes. Como resultado, la constructora logró obtener nuevos contratos importantes y
              contar con un portafolio formal para presentar en procesos de licitación.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white">Duración:</span>
            <span className="text-white/80">6 meses</span>
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
