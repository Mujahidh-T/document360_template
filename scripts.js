"use strict";

// Elements
const navToggler = document.querySelector(".header__menu--toggler");
const navElement = document.querySelector(".navigation");

// Navigation Toggle
if (document.documentElement.clientWidth <= 600) {
  const navHeight = getComputedStyle(navElement).height;

  navElement.classList.add("mobile");
  navElement.style.height = 0;

  navToggler.addEventListener("click", function () {
    this.classList.toggle("active");

    if (this.classList.contains("active")) {
      navElement.style.height = navHeight;
    } else {
      navElement.style.height = 0;
    }
  });
}
