$(document).ready(function() {

    /* Hotel Slider */
    var hotelSlider = new Swiper('.js-hotelSlider', {
        // Optional parameters
        loop: true,

        // Keyboard Control Parameters
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.js-hotelSliderBtnNext',
            prevEl: '.js-hotelSliderBtnPrev',
        },
    });


    /* Review Slider */
    var reviewsSlider = new Swiper('.js-reviewsSlider', {
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
            nextEl: '.js-reviewsSliderBtnNext',
            prevEl: '.js-reviewsSliderBtnPrev',
        },
    });


    /* Nav menu button */
    var menuButton = $('.js-menuBtn');
    menuButton.on('click', function() {
        $('.js-navMenu').toggleClass('nav_mobile_visible');
    });


    /* Modal */
    var modalBtn = $('[data-toggle=modal]');
    var closeModalBtn = $('.js-closeModal');

    modalBtn.on('click', openModal);
    closeModalBtn.on('click', closeModal);

    function openModal() {
        var modalOverlay = $('.js-modalOverlay');
        var modalDialog = $('.js-modalDialog');

        modalOverlay.addClass('modal__overlay_visible');
        modalDialog.addClass('modal__dialog_visible');
    }

    function closeModal(event) {
        event.preventDefault();

        var modalOverlay = $('.js-modalOverlay');
        var modalDialog = $('.js-modalDialog');

        modalOverlay.removeClass('modal__overlay_visible');
        modalDialog.removeClass('modal__dialog_visible');
    }

});