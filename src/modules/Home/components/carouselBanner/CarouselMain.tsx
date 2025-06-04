'use client';
import React, { useRef } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
// import { useDotButton } from './DotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './Arrows';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';
import HomePublicStyles from '../../styles/homePublic.module.css';
// import Fade from 'embla-carousel-fade';

import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { useAutoplayProgress } from './useAutoplayProgress';
import ButtonLinkTheDoorAgency from '@/common/components/customize/ButtonLinkTheDoorAgency';

type PropType = {
  options?: EmblaOptionsType;
};

const BannerCarouselHome: React.FC<PropType> = (props) => {
  const { options } = props;
  const progressNode = useRef<HTMLDivElement>(null!); // Usamos "non-null assertion"

  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });
  // const fade = Fade();
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true, containScroll: false }, [
    autoplay,
  ]);

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  // Pasamos handleSlideChange al hook para que se ejecute tras scrollPrev/scrollNext
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <section className="relative h-[calc(100dvh-76px)] w-full overflow-hidden">
      <div className="bg-thedooragency-negro relative h-full w-full" ref={emblaRef}>
        <div className="flex h-full w-full">
          <div className="flex h-full shrink-0 basis-full items-center justify-center">
            <div className={cn(HomePublicStyles.fondoBanner1, 'relative z-10 h-full w-full')}>
              <div className="fade-in-unique absolute inset-0 flex flex-col items-center justify-center gap-6">
                <h2 className="text-center text-2xl leading-tight font-black text-white md:text-[40px]">
                  DONDE TODO EMPIEZA
                </h2>
                <ButtonLinkTheDoorAgency
                  href="/servicios"
                  variant="outline"
                  className="w-full max-w-fit px-6 py-4 !font-normal"
                >
                  Explora nuestros servicios
                </ButtonLinkTheDoorAgency>
              </div>
            </div>
          </div>
          <div className="flex h-full shrink-0 basis-full items-center justify-center">
            <div className={cn(HomePublicStyles.fondoBanner2, 'relative z-10 h-full w-full')}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <h2 className="text-center text-2xl leading-tight font-black text-white md:text-[40px]">
                  IDEAMOS. EJECUTAMOS. IMPACTAMOS.
                </h2>
                <ButtonLinkTheDoorAgency
                  href="/trabajos"
                  variant="outline"
                  className="w-full max-w-fit px-6 py-4 !font-normal"
                >
                  Conoce nuestro trabajo
                </ButtonLinkTheDoorAgency>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      <div className="fade-in-unique absolute bottom-6 left-1/2 -translate-x-1/2">
        <div
          className={cn('embla__progress', {
            'embla__progress--hidden': !showAutoplayProgress,
          })}
        >
          <div className="embla__progress__bar" ref={progressNode} />
        </div>
      </div>

      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn('embla__dot', {
                'embla__dot--selected': index === selectedIndex,
              })}
            />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default BannerCarouselHome;
