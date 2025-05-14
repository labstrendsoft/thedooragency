import React from 'react';
import BannerCarouselHome from './components/carouselBanner/CarouselMain';
import { ServicesView } from './components/services/ServicesView';
import { WorksViewHome } from './components/works/WorksViewHome';

export const HomeView = () => {
  return (
    <main>
      <BannerCarouselHome />
      <ServicesView />
      <WorksViewHome />
    </main>
  );
};
