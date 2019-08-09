/* eslint-disable */
window.Swiper = require('swiper');

window.swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  // grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 50,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  mousewheel: {
    eventsTarged: 'main',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
