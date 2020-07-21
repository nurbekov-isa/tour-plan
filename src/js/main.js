'use strict';

var mySwiper = new Swiper('.swiperContainer', {
    // Optional parameters
    loop: true,

    // Keyboard Control Parameters
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.sliderBtnNext',
        prevEl: '.sliderBtnPrev',
    },
});