// Scripts

const hamburger = document.querySelector(".hamburger");
const hamName = document.querySelector(".hamburger__name");
const navigation = document.querySelector(".navigation");
const menu = document.querySelector(".navigation__list");
const links = document.querySelectorAll(".navigation__item-link");
const up = document.querySelector(".top");
const logoWhite = document.querySelector(".logo__white");
const logoStart = document.querySelector(".logo__start");
const lock = document.querySelector(".lock");
const body = document.querySelector("body");
const phone = document.querySelector(".phone");
const mobile = document.querySelectorAll(".btn--contact, .icon__phone");
const background = document.querySelector(".background");


window.addEventListener('scroll', () => { // get height of hero image and active when below
    if(background.getBoundingClientRect().top < (background.getBoundingClientRect().height - 500)) {
        mobile.forEach( el => {
            el.classList.remove('hide');
        });
    } else {
        mobile.forEach(el => {
            el.classList.add('hide');
        })
    };
});

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider', {
        type   : 'loop',
        height: '800px',
        width: '60%',
        gap: '3rem',
        autoplay: true,
        lazyLoad: 'nearby',
        cover      : true,
        perMove: '1',
        interval: '4000',
        padding: {
            left : 0,
            right: '15rem',
        },
        breakpoints: {
            640: {
                height: '75%',
                width: '100%',
                padding: {
                    left : 0,
                    right: 0,
                },
            },
            1024: {
                height: '50%',
                width: '100%',
                padding: {
                    left : 0,
                    right: 0,
                },
            },
            1440: {
                height: '500px',
                width: '80%',
            },
            2500: {
                height: '600px',
                width: '70%',
            },
        }
    } ).mount();
} );

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
    },0)
    tl.to (".top", {
        background: '#fff',
    },0)
    tl.to (".logo__white", {
        top: "8px",
        width: "125px",
        opacity: '0',
    },0)
    tl.to (".phone", {
        opacity: "1",
        display: "block"
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
    tl.to (".logo__white", {
        width: "175px",
        top: "35px",
        opacity: '1',
    },0)
    tl.to (".phone", {
        opacity:"0",
        display:"none"
    },0)
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('menu-active');
    logoWhite.classList.toggle('hide');
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
            hamName.classList.remove('hamcolor');
            logoWhite.classList.remove('hide');
        },500)
    });
});

function start() {
    let tl = gsap.timeline();
    tl.to(".bground--one", {
        duration: 0.5,
        ease: Power4.easeOut,
        y: "100%"
    },1);
    tl.to(".bground--two", {
        duration: 0.5,
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
        duration: 0.15,
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



