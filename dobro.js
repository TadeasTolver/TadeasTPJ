window.onload = function() { 

const englishButton = document.getElementById("english");
const czechButton = document.getElementById("cesky");

const menuLinksList = document.getElementsByClassName("menu-link");
const dobroP = document.getElementById("dobro-p");
const buttons = document.getElementsByClassName("donate-button");
const notDonate = document.getElementById("not-donate-button");
const title = document.getElementById("dobro-title");


  
function changeEverythingToEnglish() {
    menuLinksList[0].innerHTML = "Home";
    menuLinksList[2].innerHTML = "Support";
    title.innerHTML = "Support the good";
    buttons[0].style.display = "none";
    buttons[2].innerHTML = "Support WWF >>";
    notDonate.innerHTML = "I hate animals and nature";
    dobroP.innerHTML = "Want to improve your karma? And do you want to help animals and nature? If so, you can support WWF non-profit organization that helps nature and animals. Respect to everyone who supports at least 5$ (this is the minimum on the international site). You don't have to support monthly or annually, you can do it once. Thank you in advance.";
}
    
function changeEverythingToCzech() {
    menuLinksList[0].innerHTML = "Domov";
    menuLinksList[2].innerHTML = "Podpořte dobro";
    title.innerHTML = "Podpořte dobro";
    dobroP.innerHTML = "Chcete si vylepšit karmu? A chcete pomoct nevyním zvířatům a přírodě? Pokuď ano, můžete podpořit nezyskovou organizaci WWF která pomáhá přírodě a zvířatům. Respekt všem kteřý podpoří alespoň 112,57 korunami (to je minimum na mezinárodní stránce). Nemusíte podporovat měsíčně ani ročně, můžete jednorázově. Předem děkuju.";
    buttons[0].style.display = "inline";
    buttons[2].innerHTML = "Podpořit WWF >>";
    notDonate.innerHTML = "Nemám rád zvířata a přírodu.";   
}




const savedLanguage = localStorage.getItem("language");
if (savedLanguage === "czech") {
    changeEverythingToCzech();

} else if (savedLanguage === "english") {
    changeEverythingToEnglish();
}
    
};


// menu button:

const button = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const heading = document.getElementById("dobro-title");
const again = document.getElementsByClassName("menu-link");
button.addEventListener("click", () => {
    if (button.innerHTML != "×") {
        menu.style.display = "flex";
        menu.style.height = "190px";
        heading.style.marginTop = "140px";
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


} else if (savedLanguage === "english") {
    changeEverythingToEnglish();
}
    
};
