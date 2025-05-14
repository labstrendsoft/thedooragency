import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import Image from 'next/image';
import ArrowLeft from '@public/arrow1.webp';
import ArrowRight from '@public/arrow2.webp';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<'button'>;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="absolute top-1/2 left-16 -translate-y-1/2 cursor-pointer"
      type="button"
      {...restProps}
    >
      <Image src={ArrowLeft} alt="arrow left" className="w-3 object-cover" />

      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="absolute top-1/2 right-16 -translate-y-1/2 cursor-pointer"
      type="button"
      {...restProps}
    >
      <Image src={ArrowRight} alt="arrow right" className="w-3 object-cover" />

      {children}
    </button>
  );
};
