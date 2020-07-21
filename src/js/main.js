'use strict';

var mySwiper = new Swiper('.swiperContainer', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.sliderBtnNext',
        prevEl: '.sliderBtnPrev',
    },
});