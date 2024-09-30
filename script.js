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





