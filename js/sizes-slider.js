export const sizesSlider = () => {
  new Swiper(".sizes__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".sizes__swiper-button-prev",
      nextEl: ".sizes__swiper-button-prev",
    },
  });
};
