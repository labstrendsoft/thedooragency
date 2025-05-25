import React from 'react';
import { Portada } from './components/Portada';
import mail from '@public/iconos/mailIcon.webp';
import phone from '@public/iconos/callIco.webp';
import time from '@public/iconos/HoraIcon.webp';
import ubicacion from '@public/iconos/ubiIcon.webp';
import Image from 'next/image';
import { socialLinks } from './data/redes';
import Link from 'next/link';

import { ContactForm } from './components/Formulario';
export const ContactView = () => {
  return (
    <main>
      <Portada />
      <section id="contacto" className="w-full bg-[#05060A]">
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-16 py-20 text-white md:px-6 lg:grid-cols-2">
          <div className="max-md:px-6">
            <div className="flex flex-col gap-2 border-b border-white/30 pb-6">
              <span className="mb-1 text-sm text-gray-300">Estamos aquí para ayudarte.</span>
              <h3 className="mb-3 text-xl font-semibold text-white">
                ¿Tienes dudas sobre nuestros servicios?
              </h3>
              <p className="mb-1 text-sm text-gray-300">
                Puedes escribirnos o llamarnos y te responderemos lo antes posible.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 border-b border-white/30 py-8 md:grid-cols-2">
              <div className="flex items-center gap-4">
                <Image src={phone} alt="celular" className="w-5 object-cover lg:w-7" />
                <span className="text-sm">+51 972 161 054</span>
              </div>
              <div className="flex items-center gap-4">
                <Image src={mail} alt="celular" className="w-5 object-cover lg:w-7" />
                <span className="text-sm">contacto@trendacademy.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Image src={time} alt="celular" className="w-5 object-cover lg:w-7" />
                <span className="text-sm">Lunes a Sábado 9:00 am. - 7:00 pm.</span>
              </div>
              <div className="flex items-center gap-4">
                <Image src={ubicacion} alt="celular" className="w-5 object-cover lg:w-7" />
                <span className="text-sm">Lima, Perú</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 py-6">
              <h4 className="text-sm text-white">Síguenos en nuestras Redes Sociales: </h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    className="flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      className="h-[25px] w-[25px] object-contain transition-opacity hover:opacity-80"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border border-[#161A31] bg-white px-6 py-12 md:rounded-lg lg:px-10">
            <div className="mb-6">
              <h3 className="text-thedooragency-negro mb-2 text-xl font-bold">
                Envíanos un mensaje
              </h3>
              <p className="text-sm text-gray-800">
                Llena el formulario con tus datos y envíanos tu consulta, nosotros nos pondremos en
                contacto a la brevedad posible.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};
