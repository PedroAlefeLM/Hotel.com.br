'use strict';

/**
 * navbar toggle in mobile
 */

const /** {NodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /** {NodeElement} */ $navToggle = document.querySelectorAll("[data-nav-toggle]");

$navToggle.addEventListener("click", () => $navbar.classList.toggle("active"));


/**
 * Header scroll state
 */
const /** { NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add " : "remove"]("active");
});


/**
 * Add to favorite button toggle
 */

const /**{NodeList} */ $toggleleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleleBtns.forEach($toggleBtn => {
    $toggleleBtns.addEventListener("click", () => {
        $toggleBtn.classList.toggle("active");
    });
});