import Swiper from 'swiper';
import { Autoplay, Controller } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types/swiper-options';

import { queryElement } from '$utils/queryElement';
import { setElementToWindowHeight } from '$utils/setElementToWindowHeight';

window.Webflow = window.Webflow || [];

window.Webflow.push(async () => {
  /* elements */
  const contentSwiperEl = queryElement('.swiper.is-home-header-content');
  const ctaSwiperEl = queryElement('.swiper.is-home-header-cta');
  const bgSwiperEl = queryElement('.swiper.is-home-header-bg');
  const progressBarVal = queryElement('.homeheader1_swiper_progress_value');
  const wrapperEl = queryElement('.homeheader1_wrap');
  if (!contentSwiperEl || !ctaSwiperEl || !bgSwiperEl || !progressBarVal || !wrapperEl) return;

  setElementToWindowHeight(wrapperEl);

  /* swiper options */
  const controllerSwiperOptions: SwiperOptions = {
    modules: [Autoplay, EffectFade, Controller],
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 400,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,
    autoplay: {
      delay: 6000,
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressBarVal.style.setProperty('--progress', (1 - progress).toString());
      },
    },
  };
  const controlledSwiperOptions: SwiperOptions = {
    modules: [Autoplay, EffectFade],
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    allowTouchMove: false,
  };

  /* swiper instances */
  const contentSwiper = new Swiper(contentSwiperEl, controllerSwiperOptions);
  const ctaSwiper = new Swiper(ctaSwiperEl, controlledSwiperOptions);
  const bgSwiper = new Swiper(bgSwiperEl, controlledSwiperOptions);

  contentSwiper.controller.control = ctaSwiper;
  contentSwiper.controller.control = bgSwiper;
});
