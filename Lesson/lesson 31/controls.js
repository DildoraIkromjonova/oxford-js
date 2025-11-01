import { initSlider } from "./slider.js";

export function setupSliderControls() {
  const leftBtn = document.querySelector(".slide_left_btn");
  const rightBtn = document.querySelector(".slide_right_btn");

  // slider funk
  const { next, prev } = initSlider();


  rightBtn.addEventListener("click", next);
  leftBtn.addEventListener("click", prev);


  setInterval(next, 3000);
}