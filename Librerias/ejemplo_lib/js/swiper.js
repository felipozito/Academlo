new Swiper(".swiper", {
    loop: true,

    breakpoints: {
        // when window width is >= 320px
        510: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        700: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        800: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});
