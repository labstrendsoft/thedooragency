import React from 'react';
import { Portada } from './components/Portada';
import { PropuestaValor } from './data/propuesta-valor';
import Image from 'next/image';
import { CardDirector } from './components/CardDirector';
import { directorTeam } from './data/socialDirectores';

export const AboutView = () => {
  return (
    <main>
      <Portada />
      <section id="sobre-nosotros" className="mx-auto max-w-[1000px] py-16">
        <div className="text-thedooragency-negro mb-8 space-y-4 text-sm">
          <p>
            En The Door Agency abrimos puertas a nuevas posibilidades para las marcas que buscan
            crecer, diferenciarse y conectar de forma auténtica en un mundo digital en constante
            evolución.
          </p>
          <p>
            Somos una agencia de marketing digital que combina estrategia, creatividad y tecnología
            para desarrollar soluciones a la medida de cada cliente. Nuestro equipo
            multidisciplinario está formado por estrategas, creativos, diseñadores, videógrafos,
            especialistas en publicidad y apasionados por la innovación.
          </p>
          <p>
            Creemos que cada marca tiene una historia poderosa que contar. Por eso, trabajamos desde
            una mirada integral que abarca desde la construcción de marca hasta la generación de
            resultados concretos en ventas, engagement y posicionamiento.
          </p>
          <p>
            Nuestros servicios cubren toda la experiencia del cliente: estrategia digital, gestión
            de redes sociales, campañas publicitarias (Meta y Google), branding, diseño web,
            producción audiovisual y más. Cada proyecto lo abordamos con enfoque, dedicación y una
            visión clara: que tu marca deje huella. Nos impulsa una cultura de trabajo basada en la
            colaboración, el respeto a las ideas, la mejora continua y la confianza. Valoramos la
            diversidad de perspectivas y la conexión genuina con nuestros clientes. Más que un
            proveedor, queremos ser un socio estratégico que evoluciona contigo.
          </p>
        </div>

        <h3 className="text-thedooragency-negro mx-auto mb-10 max-w-[400px] text-center text-[32px] leading-tight font-black">
          NUESTRA PROPUESTA DE VALOR
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {PropuestaValor.map((item, index) => (
            <div
              key={index}
              className="border-thedooragency-negro flex flex-col items-start space-y-4 rounded-xl border px-8 py-6 text-start"
            >
              <div className="aspect-square">
                <Image src={item.icon} alt={item.title} className="w-[110px] object-cover" />
              </div>
              <h3 className="text-lg font-extrabold">{item.title}</h3>
              <p className="text-thedooragency-negro text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-thedooragency-negro py-20">
        <div className="mx-auto grid max-w-[1000px] grid-cols-2 items-start gap-4">
          <div>
            <h3 className="mb-4 text-start text-[32px] leading-tight font-black text-white">
              EQUIPO DIRECTIVO
            </h3>
            <p className="text-sm text-white">
              En The Door Agency, nuestro equipo directivo es el corazón que impulsa nuestra visión
              y estrategia. Combinamos años de experiencia en marketing digital, creatividad,
              tecnología y gestión empresarial para guiar a la agencia hacia la innovación constante
              y el éxito de nuestros clientes.
            </p>
          </div>
          <div className="flex items-center justify-end gap-8">
            {directorTeam.map((director) => (
              <CardDirector
                key={director.name}
                title={director.name}
                subtitle={director.role}
                photo={director.photo}
                socials={director.socials}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
