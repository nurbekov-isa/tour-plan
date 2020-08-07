$(document).ready(function() {
    function e() {
        var e = $(".js-modalOverlay"),
            a = $(".js-modalDialog");
        e.addClass("modal__overlay_visible"), a.addClass("modal__dialog_visible")
    }

    function a(e) {
        e.preventDefault();
        var a = $(".js-modalOverlay"),
            o = $(".js-modalDialog");
        a.removeClass("modal__overlay_visible"), o.removeClass("modal__dialog_visible")
    }
    var o = (new Swiper(".js-hotelSlider", { loop: !0, keyboard: { enabled: !0, onlyInViewport: !1 }, navigation: { nextEl: ".js-hotelSliderBtnNext", prevEl: ".js-hotelSliderBtnPrev" } }), new Swiper(".js-reviewsSlider", { loop: !0, autoHeight: !0, keyboard: { enabled: !0, onlyInViewport: !1 }, navigation: { nextEl: ".js-reviewsSliderBtnNext", prevEl: ".js-reviewsSliderBtnPrev" } }), $(".js-menuBtn"));
    o.on("click", function() { $(".js-navMenu").toggleClass("nav_mobile_visible") });
    var l = $("[data-toggle=modal]"),
        i = $(".js-closeModal");
    l.on("click", e), i.on("click", a), $(document).keyup(function(e) {
        if (27 == e.keyCode) {
            var a = $(".js-modalOverlay"),
                o = $(".js-modalDialog");
            a.removeClass("modal__overlay_visible"), o.removeClass("modal__dialog_visible")
        }
    }), $(".js-form").each(function() { $(this).validate({ errorClass: "invalid", messages: { name: { required: "Please specify your name" }, email: { required: "We need your email address to contact you", email: "Your email address must be in the format of name@domain.com" }, phone: { required: "Your phone is required" } } }) }), $(".js-phone").each(function() { $(this).mask("+7 (000) 000-00-00") }), AOS.init()
});

const map = document.querySelector('.map-wrap');
map.addEventListener('mouseover', function() {
    map.insertAdjacentHTML('afterBegin', '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28188.37990398469!2d79.81368106542256!3d7.569713125818822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fd7668bc2d85eb9!2sGrand%20Hilton%20Hotel!5e0!3m2!1sen!2sde!4v1596808010246!5m2!1sen!2sde" allowfullscreen="" aria-hidden="false" tabindex="0" class="map"></iframe>');
});