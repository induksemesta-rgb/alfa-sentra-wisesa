/* ==========================================================
   PT ALFA SENTRA WISESA
   Corporate Export Website
   script.js
========================================================== */

/* ==========================================
   STICKY HEADER
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
        header.style.transition = ".3s";

    } else {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 3px 15px rgba(0,0,0,.08)";

    }

});


/* ==========================================
   ACTIVE MENU
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

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


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================================
   SCROLL ANIMATION
========================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".card,.features div,.gallery img,.contact-box").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================================
   CONTACT FORM
========================================== */

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=form.querySelector('input[type="text"]').value.trim();
const email=form.querySelector('input[type="email"]').value.trim();
const message=form.querySelector("textarea").value.trim();

if(name==="" || email==="" || message===""){

alert("Please complete all fields.");

return;

}

alert("Thank you.\n\nYour message has been received.\nWe will contact you as soon as possible.");

form.reset();

});

}


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backTop=document.createElement("div");

backTop.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

backTop.id="backTop";

document.body.appendChild(backTop);

backTop.style.position="fixed";
backTop.style.right="25px";
backTop.style.bottom="100px";
backTop.style.width="50px";
backTop.style.height="50px";
backTop.style.background="#0B3D91";
backTop.style.color="white";
backTop.style.display="flex";
backTop.style.alignItems="center";
backTop.style.justifyContent="center";
backTop.style.borderRadius="50%";
backTop.style.cursor="pointer";
backTop.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";
backTop.style.opacity="0";
backTop.style.pointerEvents="none";
backTop.style.transition=".3s";
backTop.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.style.opacity="1";
backTop.style.pointerEvents="auto";

}else{

backTop.style.opacity="0";
backTop.style.pointerEvents="none";

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ==========================================
   HERO BUTTON EFFECT
========================================== */

const heroBtn=document.querySelector(".btn");

if(heroBtn){

heroBtn.addEventListener("mouseenter",()=>{

heroBtn.style.transform="translateY(-5px) scale(1.03)";

});

heroBtn.addEventListener("mouseleave",()=>{

heroBtn.style.transform="translateY(0)";

});

}


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("PT Alfa Sentra Wisesa Website Loaded Successfully");