'use strict';

/* Hotel Slider */
var hotelSlider = new Swiper('.hotelSlider', {
    // Optional parameters
    loop: true,
    autoHeight: true,

    // Keyboard Control Parameters
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.hotelSliderBtnNext',
        prevEl: '.hotelSliderBtnPrev',
    },
});


/* Hotel Slider */
var reviewsSlider = new Swiper('.reviewsSlider', {
    // Optional parameters
    loop: true,

    // Keyboard Control Parameters
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.reviewsSliderBtnNext',
        prevEl: '.reviewsSliderBtnPrev',
    },
});