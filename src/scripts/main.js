// Scripts
const hamburger = document.querySelector(".hamburger");
const hamName = document.querySelector(".hamburger__name")
const navigation = document.querySelector(".navigation");
const menu = document.querySelector(".navigation__list");
const links = document.querySelectorAll(".navigation__item-link");
// const logo = document.querySelector(".logo__link");
const logoWhite = document.querySelector(".logo__white");
const logoBlue = document.querySelector(".logo__blue");
const logoStart = document.querySelector(".logo__start");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('menu-active');
    logoWhite.classList.toggle('hide');
    logoBlue.classList.toggle('hide');
    hamName.classList.toggle('hamcolor');
})

links.forEach(link => {
    link.addEventListener('click', slide);
    link.addEventListener('click', () => {
        setTimeout(() => {
        hamburger.classList.remove('is-active');
        menu.classList.remove('menu-active');
        logoWhite.classList.toggle('hide');
        logoBlue.classList.toggle('hide');
        hamName.classList.remove('hamcolor');
        },500)
    });
});


function start() {
    let tl = gsap.timeline();
    tl.to(".bground--one", {
        duration: 2,
        ease: Power3.easeOut,
        y: "100%"
    },1.25);
    tl.to(".bground--two", {
        duration: 2,
        ease: Power3.easeOut,
        y: "-100%"
    },1.25);
    tl.to(".bground--one", {
        display:"none"
    },2.5);
    tl.to(".bground--two", {
        display:"none"
    },2.5);
    tl.fromTo(".logo__enter", {
        opacity: 1
    }, {
        duration: 0.5,
        opacity: 0,
    },1.25);
    tl.to(".logo__enter", {
        display:"none"
    },2)
};



function reset() {
    this.time(0).kill(); // after animation going to initial state
}

function slide() {
    let tl = gsap.timeline({
        onComplete: reset
    });
    tl.fromTo (".slide", {x: "100%"},{
        x:"0", 
        duration: 1, 
        ease: Power3.easeOut,
    },0)
    tl.fromTo (".slide--two", {x:"100%"},{
        x:"0", 
        duration: 1, 
        ease: Power3.easeOut,
    },0)
    tl.to (".slide", {
        y: "100%",
        duration: 2, 
        ease: Power4.easeOut
    },0.7)
    tl.to (".slide--two", {
        y: "-100%", 
        duration: 2, 
        ease: Power4.easeOut
    },0.7)
    tl.to (".slide", {
        display:"none"
    },1.7)
    tl.to (".slide--two", {
        display:"none"
    },1.7)
}

window.addEventListener('load', start);