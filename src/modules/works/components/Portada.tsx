import React from "react";
import WorksStyles from "../styles/works.module.css";
import ArrowLeft from "@public/arrow1.webp";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const PortadaWorks = () => {
  return (
    <section className={cn(WorksStyles.fondoBanner1, "relative z-10")}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <h1 className="text-[40px] leading-none font-black text-white">NUESTROS TRABAJOS</h1>
        <p className="max-w-[700px] text-center text-sm text-balance text-white">
          Te invitamos a conocer nuestro portafolio, una muestra de proyectos que reflejan nuestro
          enfoque creativo, estratégico y orientado a resultados. Cada trabajo representa nuestro
          compromiso con la calidad, la innovación y la personalización. Desde sitios web hasta
          campañas de marketing digital, aquí verás cómo convertimos ideas en soluciones reales que
          conectan con las audiencias y cumplen objetivos.
        </p>
      </div>
      <Link
        href="#sobre-nosotros"
        className="animate-scroll-down absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <Image src={ArrowLeft} alt="arrow left" className="w-3 -rotate-90 object-cover" />
      </Link>
    </section>
  );
};
