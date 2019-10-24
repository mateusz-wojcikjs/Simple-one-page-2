const navBar = document.getElementById("navbar");
const textbox1 = document.getElementById("anim-tb");
const textbox2 = document.getElementById("motion-about");
const header = document.querySelector(".header");
const services = document.querySelector(".services");
const about = document.querySelector(".about");
const backToTop = document.querySelector(".back-to-top");
const navLink = document.querySelectorAll(".navigation__item a");
const navLinks = document.querySelectorAll(".navigation__list li");
const windowSelector = document.querySelector("body");
const windowHeight = parseInt(getComputedStyle(windowSelector).height);


document.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
        navBar.classList.replace("navigation", "navigation-fixed");
    } else if (window.pageYOffset <= 50) {
        navBar.classList.replace("navigation-fixed", "navigation");

    }
});
window.addEventListener("load", () => {
    setTimeout(function () {
        textbox1.classList.remove("motion-left");
    }, 500)

});

document.addEventListener("scroll", () => {
    const headerHeight = parseInt(getComputedStyle(header).height);
    const aboutHeight = parseInt(getComputedStyle(about).height);
    const servicesHeight = parseInt(getComputedStyle(services).height);

    if (window.pageYOffset > (headerHeight)) {
        textbox2.classList.remove("motion-left");
    }

});

window.addEventListener("load", function () {
    const home = document.querySelector("#home");
    const about = document.querySelector("#about");
    const portfolio = document.querySelector(".lastest");
    const contact = document.querySelector(".footer");
    const cta = document.querySelector(".cta");
    const testimonials = document.querySelector(".testimonials");
    const brands = document.querySelector(".brands");
    const services = document.querySelector(".services");
    const values = document.querySelector(".values");


    const homeHeight = parseInt(getComputedStyle(home).height);
    const aboutHeight = parseInt(getComputedStyle(about).height);
    const portfolioHeight = parseInt(getComputedStyle(portfolio).height);
    const contactHeight = parseInt(getComputedStyle(contact).height);
    const servicestHeight = parseInt(getComputedStyle(services).height);
    const ctaHeight = parseInt(getComputedStyle(cta).height);
    const testimonialsHeight = parseInt(getComputedStyle(testimonials).height);
    const brandsHeight = parseInt(getComputedStyle(brands).height);
    const valuesHeight = parseInt(getComputedStyle(values).height);
    const navBarHeight = 1; //parseInt(getComputedStyle(navBar).height);


    document.addEventListener('scroll', () => {

        if (window.pageYOffset >= 0 && window.pageYOffset < navBarHeight) {
            navLink[0].classList.remove("active-link");
            navLink[1].classList.remove("active-link");
            navLink[2].classList.remove("active-link");
            navLink[3].classList.remove("active-link");
            backToTop.classList.remove('button-on');


        } else if (window.pageYOffset > navBarHeight && window.pageYOffset < (homeHeight + navBarHeight)) {
            navLink[0].classList.add("active-link");
            navLink[1].classList.remove("active-link");
            navLink[2].classList.remove("active-link");
            navLink[3].classList.remove("active-link");
            backToTop.classList.add('button-on');

        } else if (window.pageYOffset > (homeHeight - navBarHeight) && window.pageYOffset <= (aboutHeight + homeHeight + servicestHeight - navBarHeight)) {
            navLink[0].classList.remove("active-link");
            navLink[1].classList.add("active-link");
            navLink[2].classList.remove("active-link");
            navLink[3].classList.remove("active-link");

        } else if (window.pageYOffset > (servicestHeight + aboutHeight + homeHeight - navBarHeight) && window.pageYOffset < (windowHeight - (windowHeight/2) + testimonialsHeight)) {
            navLink[0].classList.remove("active-link");
            navLink[1].classList.remove("active-link");
            navLink[2].classList.add("active-link");
            navLink[3].classList.remove("active-link");

        } else if (window.pageYOffset > (windowHeight - (windowHeight/2) + testimonialsHeight)) {
            navLink[0].classList.remove("active-link");
            navLink[1].classList.remove("active-link");
            navLink[2].classList.remove("active-link");
            navLink[3].classList.add("active-link");
        }
    });
});


const scroll = new SmoothScroll('nav a[href*="#"], .back-to-top', {
    speed: 800,
    easing: 'easeInCubic'
});