"use strict";
// Variables
const hamburger = document.querySelector(".hamburger");
const navigationMenuMob = document.querySelector(".navigation");

// Event Listeners
hamburger.addEventListener("click", () => {
  navigationMenuMob.classList.toggle("hide--element--active");
  hamburger.classList.toggle("hamburger--active");
});
