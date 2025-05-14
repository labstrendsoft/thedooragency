import React from 'react';
import BannerCarouselHome from './components/carouselBanner/CarouselMain';
import { ServicesView } from './components/services/ServicesView';
import { WorksView } from './components/works/WorksView';

export const HomeView = () => {
  return (
    <main>
      <BannerCarouselHome />
      <ServicesView />
      <WorksView />
    </main>
  );
};
