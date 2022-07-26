var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      loop: false,
    },
    500: {
      slidesPerView: 2,
      loop: false,
    },
    768: {
      slidesPerView: 3,
      loop: false,
    },
    1100: {
      slidesPerView: 4,
      loop: false,
    },
    1440: {
      slidesPerView: 5,
      loop: false,
    },
  },
});
