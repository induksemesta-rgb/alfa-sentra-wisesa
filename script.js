/* =====================================================
   PT ALFA SENTRA WISESA
   Corporate Export Website
   SCRIPT.JS
===================================================== */


/* ===========================
   STICKY HEADER
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


/* ===========================
   ACTIVE MENU
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});


/* ===========================
   MOBILE MENU
=========================== */

const menuToggle=document.querySelector(".menu-toggle");

const nav=document.querySelector("nav");

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("show");

});
/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
".about-content,.product-card,.why-card,.gallery-grid img,.contact-content"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach((el)=>{

        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 120){

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

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


/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters = document.querySelectorAll(".counter");

const speed = 80;

const runCounter = () => {

    counters.forEach(counter=>{

        const update = ()=>{

            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if(count < target){

                counter.innerText = count + increment;

                setTimeout(update,25);

            }else{

                counter.innerText = target;

            }

        };

        update();

    });

};

const counterSection = document.querySelector(".statistics");

if(counterSection){

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter();

counterObserver.disconnect();

}

});

});

counterObserver.observe(counterSection);

}


/* =====================================================
   GALLERY HOVER EFFECT
===================================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.08)";

image.style.transition=".4s";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

});


/* =====================================================
   BUTTON HOVER
===================================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});


/* =====================================================
   SIMPLE PAGE LOADER
===================================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

console.log("PT Alfa Sentra Wisesa Website Loaded");
/* =====================================================
   GALLERY LIGHTBOX
===================================================== */

const images = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

images.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

const img = document.createElement("img");

img.src = image.src;

while(lightbox.firstChild){

lightbox.removeChild(lightbox.firstChild);

}

lightbox.appendChild(img);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});


/* =====================================================
   CONTACT FORM VALIDATION
===================================================== */

const contactForm = document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name = contactForm.querySelector('input[type="text"]');

const email = contactForm.querySelector('input[type="email"]');

const message = contactForm.querySelector("textarea");

if(name.value.trim()===""){

alert("Please enter your name.");

name.focus();

return;

}

if(email.value.trim()===""){

alert("Please enter your email.");

email.focus();

return;

}

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.value.match(emailPattern)){

alert("Invalid email address.");

email.focus();

return;

}

if(message.value.trim()===""){

alert("Please write your message.");

message.focus();

return;

}

alert("Thank you.\nYour message has been submitted successfully.");

contactForm.reset();

});

}


/* =====================================================
   NAVBAR SHADOW
===================================================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 12px 30px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

}

});


/* =====================================================
   HERO PARALLAX
===================================================== */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

let offset=window.pageYOffset;

if(hero){

hero.style.backgroundPositionY=offset*0.4+"px";

}

});


/* =====================================================
   TYPEWRITER EFFECT
===================================================== */

const heroTitle=document.querySelector(".hero-text h3");

if(heroTitle){

const text=heroTitle.innerText;

heroTitle.innerText="";

let i=0;

function typing(){

if(i<text.length){

heroTitle.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

window.addEventListener("load",typing);

}


/* =====================================================
   CURRENT YEAR FOOTER
===================================================== */

const footer=document.querySelector(".footer-bottom p");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" PT Alfa Sentra Wisesa. All Rights Reserved.";

}


/* =====================================================
   DISABLE RIGHT CLICK (OPTIONAL)
===================================================== */

// Uncomment jika diperlukan
/*
document.addEventListener("contextmenu",function(e){

e.preventDefault();

});
*/


/* =====================================================
   DISABLE F12 (OPTIONAL)
===================================================== */

// Uncomment jika diperlukan
/*
document.onkeydown=function(e){

if(e.keyCode==123){

return false;

}

};
*/


/* =====================================================
   WEBSITE READY
===================================================== */

console.log("------------------------------------");
console.log("PT Alfa Sentra Wisesa");
console.log("Corporate Website Ready");
console.log("------------------------------------");