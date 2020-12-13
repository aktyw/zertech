// Scripts
const hamburger = document.querySelector(".hamburger");
const hamName = document.querySelector(".hamburger__name")
const navigation = document.querySelector(".navigation");
const menu = document.querySelector(".navigation__list");
const links = document.querySelectorAll(".navigation__item-link");
// const logo = document.querySelector(".logo__link");
const logoWhite = document.querySelector(".logo__white");
const logoBlue = document.querySelector(".logo__blue");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('menu-active');
    logoWhite.classList.toggle('hide');
    logoBlue.classList.toggle('hide');
    hamName.classList.toggle('hamcolor');
    // logo.classList.toggle('color');

})
