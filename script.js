
window.onload = function() { 

const englishButton = document.getElementById("english");
const czechButton = document.getElementById("cesky");

const menuLinksList = document.getElementsByClassName("menu-link");
const mainP = document.getElementById("main-p");

  
function changeEverythingToEnglish() {
    menuLinksList[0].innerHTML = "Home";
    menuLinksList[2].innerHTML = "Support";
    mainP.innerHTML = "Welcome to my website. If you want to read a detailed description of my videos, or if you want to support a good cause, you are in the right place. My old website was very unprofessional, I hope this one will be a little better. <br> Respect to all who will contribute to the good.";
}
function changeEverythingToCzech() {
    menuLinksList[0].innerHTML = "Domov";
    menuLinksList[2].innerHTML = "Podpořte dobro";
    mainP.innerHTML = "Vitejte na mé webovce. <br> Pokuď si chcete přečíst detajlní popis mých videí, nebo chcte podpořit dobro, jste na správném místě. Moje stará webovka byla velmi neprofesionální, doufám že tahle bude trochu lepší. Respekt všem kterým přispejou dobru.";    
}

czechButton.addEventListener("click", function() {
    if (czechButton.style.backgroundColor != "green") {   
        czechButton.style.backgroundColor = "green";
        englishButton.style.backgroundColor = "white";
        localStorage.setItem("language", "czech");
        changeEverythingToCzech();  
    }
});

englishButton.addEventListener("click", function() {
    if (englishButton.style.backgroundColor != "green") {   
        englishButton.style.backgroundColor = "green";
        czechButton.style.backgroundColor = "white";
        localStorage.setItem("language", "english");
        changeEverythingToEnglish();  
    }
});


const savedLanguage = localStorage.getItem("language");
if (savedLanguage === "czech") {
    changeEverythingToCzech();
    czechButton.style.backgroundColor = "green";
    englishButton.style.backgroundColor = "white";
} else if (savedLanguage === "english") {
    changeEverythingToEnglish();
    englishButton.style.backgroundColor = "green";
    czechButton.style.backgroundColor = "white";
}
    
};


/* carousel */


const slides = document.querySelectorAll("#carousel-images img");
const left = document.getElementById("carousel-btn-1");
const right = document.getElementById("carousel-btn-2");
const time = 5000;
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);
left.addEventListener("click", prevSlide);
right.addEventListener("click", nextSlide);

function initializeSlider() {
    if (slides.length > 0){
        slides[slideIndex].classList.add("display-slide");
        intervalId = setInterval(nextSlide, time);
    } 
}

function showSlide(index) {
    
    if (index >= slides.length) {
       slideIndex = 0; // If were on the end, we go back to the start.
    } else if (index < 0) {
       slideIndex = slides.length - 1; // If were on the start, and were going more back, go to the end.
    }
    
    slides.forEach(slide => {
        slide.classList.remove("display-slide");
    });
    
    slides[slideIndex].classList.add("display-slide");
}


function prevSlide() {
    clearInterval(intervalId);
    slideIndex --;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex ++;
    showSlide(slideIndex);

}


// menu button:

const button = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const heading = document.getElementById("h1-name");
const again = document.getElementsByClassName("menu-link");
button.addEventListener("click", () => {
    if (button.innerHTML != "×") {
        menu.style.display = "flex";
        menu.style.height = "190px";
        heading.style.marginTop = "180px";
        button.innerHTML = "×";
        button.style.border = "none";
        again[0].style.marginTop = "70px";
        again[1].style.marginTop = "110px";
        again[2].style.marginTop = "150px";
        for (i=0; i < 3; i++) {
            again[i].style.position = "absolute";
            again[i].style.left = "20px";
        }

    } else {
        menu.style.display = "none";
        menu.style.height = "0";
        heading.style.marginTop = "40px";
        button.innerHTML = "≡";
        button.style.borderRight = "1px solid darkgreen";
        button.style.borderBottom = "1px solid darkgreen";
        for (i=0; i < 3; i++) {
            again[i].style.position = "absolute";
            again[i].style.left = "20px";
            again[i].style.marginTop = "0";
        }
    }
});

