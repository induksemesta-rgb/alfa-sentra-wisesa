/* ==========================================================
   PT ALFA SENTRA WISESA
   Corporate Export Website
   SCRIPT.JS
========================================================== */

/* ==========================================================
   STICKY HEADER
========================================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});


/* ==========================================================
   ACTIVE MENU
========================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================================
   MOBILE MENU
========================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("show");

});

}


/* Tutup menu setelah klik */

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("show");

});

});


/* ==========================================================
   SCROLL ANIMATION
========================================================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll(

".section-header,.about-image,.about-text,.product-card,.why-card,.gallery-grid img,.contact-content"

).forEach(el=>{

observer.observe(el);

});


/* ==========================================================
   COUNTER
========================================================== */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ==========================================================
   BACK TO TOP
========================================================== */

const backTop=document.getElementById("backTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.classList.add("show");

}else{

backTop.classList.remove("show");

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ==========================================================
   SIMPLE CONTACT FORM
========================================================== */

const form=document.querySelector(".contact-form form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you. Your message has been received.");

form.reset();

});

}


/* ==========================================================
   PRELOADER EFFECT
========================================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/* ==========================================================
   CONSOLE
========================================================== */

console.log("PT Alfa Sentra Wisesa Website Loaded Successfully");