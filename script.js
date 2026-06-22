// MOBILE NAVBAR

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// SCROLL REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

// RUN ON PAGE LOAD

revealSections();

// OPTIONAL NAVBAR SHADOW ON SCROLL

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 8px 30px rgba(0,0,0,0.25)";

    }
    else{

        navbar.style.boxShadow = "none";

    }

});