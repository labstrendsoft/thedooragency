import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@shadcnui/accordion';
import { services } from '../data/Service';
import Image from 'next/image';
import MotionWrapper from './MotionWrapper';

// Componente tipado
export const ServiceComponent: React.FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full divide-y-2 divide-gray-200 pb-16"
      defaultValue="item-1"
    >
      {services.map((service) => (
        <MotionWrapper key={service.id}>
          <AccordionItem value={service.id}>
            <AccordionTrigger className="data-[state=open]:bg-thedooragency-negro cursor-pointer bg-transparent px-6 py-6 hover:no-underline data-[state=open]:rounded-none data-[state=open]:text-white">
              <div className="flex max-w-[950px] items-start gap-4 lg:mx-auto lg:items-center">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-black lg:text-4xl">{service.title}</h3>
                  <h4 className="text-xs lg:text-base">{service.subtitle}</h4>
                  <p className="text-muted-foreground hidden lg:block">{service.description}</p>
                </div>
                <Image
                  src={service.image}
                  alt={`${service.title} portada`}
                  className="hidden max-w-[350px] object-cover lg:block"
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex max-w-[1000px] flex-col items-center gap-10 px-6 pb-6 min-[420px]:pt-8 lg:mx-auto lg:flex-row xl:px-0">
                <Image
                  src={service.contentImage}
                  alt={`${service.title} detalle`}
                  className="max-w-[400px] object-cover"
                />
                <div className="flex w-full flex-col gap-4">
                  {service.steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start gap-4 lg:flex-row lg:gap-6"
                    >
                      <span className="w-full text-sm font-extrabold lg:max-w-[120px]">
                        {step.title}
                      </span>
                      <p className="text-balance">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </MotionWrapper>
      ))}
    </Accordion>
  );
};
