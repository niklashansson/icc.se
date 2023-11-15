import Swiper from 'swiper';
import type { SwiperOptions } from 'swiper/types/swiper-options';

import { queryElements } from '$utils/queryElements';

window.Webflow = window.Webflow || [];

window.Webflow.push(() => {
  const swiperElements = [...queryElements('.swiper.is-posts-layout-1')];
  if (!swiperElements.length) return;

  const options: SwiperOptions = {
    speed: 800,
    slidesPerView: 3,
    spaceBetween: 24,
  };

  swiperElements.forEach((swiperElement) => {
    const swiperWrapper = swiperElement?.firstChild as HTMLElement;
    if (swiperWrapper.classList.contains('w-dyn-empty')) return;

    new Swiper(swiperElement, options);
  });
});
