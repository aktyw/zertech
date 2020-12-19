// Scripts
const hamburger = document.querySelector(".hamburger");
const hamName = document.querySelector(".hamburger__name")
const navigation = document.querySelector(".navigation");
const menu = document.querySelector(".navigation__list");
const links = document.querySelectorAll(".navigation__item-link");
const up = document.querySelector(".top");
const logoWhite = document.querySelector(".logo__white");
const logoBlue = document.querySelector(".logo__blue");
const logoStart = document.querySelector(".logo__start");
const lock = document.querySelector(".lock");
const body = document.querySelector("body");

window.addEventListener('scroll', () => {
    const mediaQuery = window.matchMedia('(min-width: 1025px)')
    if(scrollY > 60 && mediaQuery.matches) {
        mini();
    } else if(scrollY < 55 && mediaQuery.matches) {
        miniRev();
    }
}) 

function mini() {
    let tl = gsap.timeline({duration: 0.2});
    tl.to (".hamburger", {
        top: "0px",
        x: "55%"
    },0)
    tl.to (".top", {
        background: '#fff',
    },0)
    tl.to (".logo__blue", {
        top: "-20px",
        width: "100px",
        height: "100px",
    },0)
    tl.to (".logo__white", {
        top: "-20px",
        width: "100px",
        height: "100px"
    },0)
}

function miniRev() {
    let tl = gsap.timeline({duration: 0.2});
    tl.to (".hamburger", {
        top: "42px",
        x: "0%"
    },0)
    tl.to (".top", {
        background: 'transparent',
    },0)
    tl.to (".logo__blue", {
        width: "200px",
        height: "200px",
        top: "-50px"
    },0)
    tl.to (".logo__white", {
        width: "200px",
        height: "200px",
        top: "-50px"
    },0)
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('menu-active');
    logoWhite.classList.remove('hide');
    logoBlue.classList.toggle('hide');
    hamName.classList.toggle('hamcolor');
    body.classList.toggle('lock');
})

links.forEach(link => {
    link.addEventListener('click', slide);
    link.addEventListener('click', () => {
        setTimeout(() => {
            body.classList.remove('lock');
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
        duration: 1.5,
        ease: Power4.easeOut,
        y: "100%"
    },1);
    tl.to(".bground--two", {
        duration: 1.5,
        ease: Power4.easeOut,
        y: "-100%"
    },1);
    tl.to(".bground--one", {
        display:"none"
    },2);
    tl.to(".bground--two", {
        display:"none"
    },2);
    tl.fromTo(".logo__enter", {
        opacity: 1
    }, {
        duration: 0.5,
        opacity: 0,
    },1);
    tl.to(".logo__enter", {
        display:"none"
    },2)
};

window.addEventListener('load', start);


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
        ease: Power4.easeOut,
    },0)
    tl.fromTo (".slide--two", {x:"100%"},{
        x:"0", 
        duration: 1, 
        ease: Power4.easeOut,
    },0)
    tl.to (".slide", {
        y: "100%",
        duration: 1, 
        ease: Power4.easeOut
    },1)
    tl.to (".slide--two", {
        y: "-100%", 
        duration: 1, 
        ease: Power4.easeOut
    },1)
    tl.to (".slide", {
        display:"none"
    },2)
    tl.to (".slide--two", {
        display:"none"
    },2)
}


