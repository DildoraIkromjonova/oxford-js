export function initSlider() {
  const leftBtn = document.querySelector(".slide_left_btn");
  const rightBtn = document.querySelector(".slide_right_btn");
  const slideContainer = document.querySelector(".slider_image_container");
  const Images = document.querySelectorAll(".slider_image_container img");

  let currentIndex = 0;

  function next() {
    currentIndex = currentIndex + 1;
    if (currentIndex > Images.length - 1) {
      currentIndex = 0;
      slideContainer.style.transform = `translateX(0)`;
      return;
    }
    let offset = `-${currentIndex * 100}%`;
    slideContainer.style.transform = `translateX(${offset})`;
  }

  function prev() {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
      currentIndex = Images.length - 1;
    }
    let offset = `-${currentIndex * 100}%`;
    slideContainer.style.transform = `translateX(${offset})`;
  }

  return { next, prev };
}