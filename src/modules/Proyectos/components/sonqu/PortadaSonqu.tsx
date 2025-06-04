import React from 'react';
import ContactStyles from '../../styles/proyectos.module.css';
import ArrowLeft from '@public/arrow1.webp';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import persona from '@public/works/sonqu/sonqu.webp';

export const PortadaSonqu = () => {
  return (
    <section className={cn(ContactStyles.fondoBanner5, 'relative z-10 h-[calc(100dvh-76px)]')}>
      <Image
        src={persona}
        alt="foto del chef sonqu"
        className="pointer-events-none absolute bottom-0 z-10 hidden h-auto max-h-[90vh] w-full max-w-[300px] object-cover object-top select-none lg:right-[20px] lg:block lg:max-w-[700px] xl:right-[calc(10vw+10px)] xl:max-w-[700px] 2xl:right-[calc(10vw+70px)]"
      />
      <div className="fade-in-unique mx-auto flex h-full max-w-[1200px] flex-col items-start justify-center gap-2 px-6 xl:px-0">
        <div className="flex flex-col items-center gap-4 px-6 lg:items-start lg:px-0">
          <h2 className="text-thedooragency-negro text-3xl font-black">Sonqu</h2>
          <div className="mb-2 flex flex-wrap items-center justify-center gap-3 md:gap-x-4 md:gap-y-1">
            <div className="text-thedooragency-negro/80 relative flex items-center gap-2 text-xs lg:text-sm">
              <span className="absolute top-[20%] -translate-y-1/2 text-2xl leading-none font-black">
                .
              </span>
              <div className="pl-3">Marketing Digital</div>
            </div>
            <div className="text-thedooragency-negro/80 relative flex items-center gap-2 text-xs lg:text-sm">
              <span className="absolute top-[20%] -translate-y-1/2 text-2xl leading-none font-black">
                .
              </span>
              <div className="pl-3">Desarrollo Web</div>
            </div>
          </div>
          <div>
            <p className="text-thedooragency-negro mb-4 max-w-[500px] text-center text-xs leading-snug text-balance lg:text-start lg:text-sm">
              Sonqu es un canal de YouTube dedicado a compartir recetas tradicionales con un enfoque
              casero y auténtico. Nos encargamos de la edición de sus contenidos para plataformas
              como YouTube, TikTok y Facebook, lo que permitió un crecimiento orgánico sostenido y
              una comunidad cada vez más activa.
            </p>
            <p className="text-thedooragency-negro max-w-[500px] text-center text-xs leading-snug text-balance lg:text-start lg:text-sm">
              Este crecimiento impulsó al canal a dar el siguiente paso: lanzar su propia línea de
              productos, empezando con manteca de cerdo artesanal. Para apoyar esta transición al
              eCommerce, desarrollamos una página web que incluye secciones con información del
              canal, recetas destacadas, venta de productos y un espacio interactivo para que los
              usuarios compartan sus propias preparaciones. El lanzamiento fue un éxito: en solo un
              mes se agotó el primer lote del producto, consolidando a Sonqu como una marca digital
              con identidad, comunidad y potencial comercial.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-thedooragency-negro font-semibold">Duración:</span>
            <span className="text-thedooragency-negro/80">4 meses</span>
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
