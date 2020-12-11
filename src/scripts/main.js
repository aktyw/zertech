// Scripts
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const menu = document.querySelector(".navigation__list");
const links = document.querySelectorAll(".navigation__item-link");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('menu-active');

})
