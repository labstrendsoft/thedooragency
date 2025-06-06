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
        <div className="text-thedooragency-negro mb-16 space-y-4 px-6 text-sm lg:px-0">
          {[
            'En The Door Agency abrimos puertas a nuevas posibilidades para las marcas que buscan crecer, diferenciarse y conectar de forma auténtica en un mundo digital en constante evolución.',
            'Somos una agencia de marketing digital que combina estrategia, creatividad y tecnología para desarrollar soluciones a la medida de cada cliente. Nuestro equipo multidisciplinario está formado por estrategas, creativos, diseñadores, videógrafos, especialistas en publicidad y apasionados por la innovación.',
            'Creemos que cada marca tiene una historia poderosa que contar. Por eso, trabajamos desde una mirada integral que abarca desde la construcción de marca hasta la generación de resultados concretos en ventas, engagement y posicionamiento.',
            'Nuestros servicios cubren toda la experiencia del cliente: estrategia digital, gestión de redes sociales, campañas publicitarias (Meta y Google), branding, diseño web, producción audiovisual y más. Cada proyecto lo abordamos con enfoque, dedicación y una visión clara: que tu marca deje huella. Nos impulsa una cultura de trabajo basada en la colaboración, el respeto a las ideas, la mejora continua y la confianza. Valoramos la diversidad de perspectivas y la conexión genuina con nuestros clientes. Más que un proveedor, queremos ser un socio estratégico que evoluciona contigo.',
          ].map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <h3 className="text-thedooragency-negro mx-auto mb-10 max-w-[400px] px-6 text-center text-2xl leading-tight font-black sm:px-0 lg:text-[32px]">
          NUESTRA PROPUESTA DE VALOR
        </h3>
        <div className="grid grid-cols-1 gap-8 px-6 lg:grid-cols-3 lg:gap-4 lg:px-0">
          {PropuestaValor.map((item, index) => (
            <div
              key={index}
              className="border-thedooragency-negro flex flex-col items-start space-y-4 rounded-xl border px-8 py-6 text-start"
            >
              <div className="aspect-square">
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="w-[80px] object-cover lg:w-[110px]"
                />
              </div>
              <h3 className="text-lg font-extrabold">{item.title}</h3>
              <p className="text-thedooragency-negro text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-thedooragency-negro py-20">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-start gap-12 px-6 lg:grid-cols-2 lg:gap-4 lg:px-0">
          <div>
            <h3 className="mb-4 text-start text-2xl leading-tight font-black text-white lg:text-[32px]">
              EQUIPO DIRECTIVO
            </h3>
            <p className="text-sm text-white">
              En The Door Agency, nuestro equipo directivo es el corazón que impulsa nuestra visión
              y estrategia. Combinamos años de experiencia en marketing digital, creatividad,
              tecnología y gestión empresarial para guiar a la agencia hacia la innovación constante
              y el éxito de nuestros clientes.
            </p>
          </div>
          <div className="flex flex-col gap-8 min-[400px]:flex-row min-[400px]:items-center min-[400px]:gap-6 sm:gap-8 lg:justify-end">
            {directorTeam.map((director) => (
              <div key={director.name}>
                <CardDirector
                  title={director.name}
                  subtitle={director.role}
                  photo={director.photo}
                  socials={director.socials}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
