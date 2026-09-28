import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.feedbacks-swiper', {
  modules: [Navigation, Pagination, Keyboard],

  slidesPerView: 1,
  spaceBetween: 16,

  navigation: {
    nextEl: '.feedbacks-button-next',
    prevEl: '.feedbacks-button-prev',
  },

  pagination: {
    el: '.feedbacks-pagination',
    clickable: true,
  },

  keyboard: {
    enabled: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});