'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './DotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './Arrows';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';
import HomePublicStyles from '../../styles/homePublic.module.css';
import Fade from 'embla-carousel-fade';

import { ButtonBanner } from '../ButtonBanner';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

type PropType = {
  options?: EmblaOptionsType;
};

const BannerCarouselHome: React.FC<PropType> = (props) => {
  const { options } = props;
  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: true });
  const fade = Fade();
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true, containScroll: false }, [
    fade,
    autoplay,
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <section className="embla relative h-[calc(100vh-81px)] w-full overflow-hidden">
      <div className="relative h-full w-full" ref={emblaRef}>
        <div className="flex h-full w-full gap-4">
          <div className="embla__slide flex h-full w-full flex-[0_0_100%] items-center justify-center">
            <div className={cn(HomePublicStyles.fondoBanner1, 'relative z-10')}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <h2 className="tracking-in-contract text-center text-2xl leading-none font-black text-white md:text-[40px]">
                  DONDE TODO EMPIEZA
                </h2>
                <ButtonBanner />
              </div>
            </div>
          </div>
          <div className="embla__slide flex h-full w-full flex-[0_0_100%] items-center justify-center">
            <div className={cn(HomePublicStyles.fondoBanner2, 'relative z-10')}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <h2 className="tracking-in-contract text-center text-2xl leading-none font-black text-white md:text-[40px]">
                  ACABA PORQUE ACABA
                </h2>
                <ButtonBanner />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
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
      </div>
    </section>
  );
};

export default BannerCarouselHome;
