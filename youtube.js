window.onload = function() { 

const englishButton = document.getElementById("english-yt");
const czechButton = document.getElementById("cesky-yt");

const menuLinksList = document.getElementsByClassName("menu-link");

const longVidTitlesList = document.getElementsByClassName("long-vid-title");
const longVidTextList = document.getElementsByClassName("long-vid-text");
const vidTitleList = document.getElementsByClassName("vid-title");
const vidText = document.getElementsByClassName("vid-text");
    

      
function changeEverythingToEnglish() {
    menuLinksList[0].innerHTML = "Home";
    menuLinksList[2].innerHTML = "Support";
    
    longVidTitlesList[0].innerHTML = "CHALLENGE, SURVIVE 24 HOURS IN THE WILDERNESS!";
    longVidTitlesList[1].innerHTML = "Comparing drinks";
    longVidTextList[0].innerHTML = "This video was shot in Bezkydy in 2024. It's a parody. The quality is not the best because the video was shot and edited on a phone.";
    longVidTextList[1].innerHTML = "This video is a comparison and review of Fizi drink Ultra Boris and Mogu Mogu Grapes.";
    longVidTextList[2].innerHTML = "Very poor quality video, shot in Qaqortoq, South Greenland 2023.";
    
    vidTitleList[6].innerHTML = "That's beneficial...!!!";
    vidTitleList[9].innerHTML = "Are you subscribed to Tadeas Tolver?";
    vidTitleList[10].innerHTML = "Skittles Giants Gooey review.";
    vidText[0].innerHTML = "Video taken from an Air Greenland helicopter departing from Narsaq, South Greenland 2023";
    vidText[1].innerHTML = "Time-lapse video shot from the cockpit of an Air Greenland Bombardier Dash 8-200 landing in Nuuk, Greenland 2023.";
    vidText[2].innerHTML = "Video taken from a boat. Waterfall on Sermitsiaq mountain near Nuuk, West Greenland 2023.";
    vidText[3].innerHTML = "Funny video.";
    vidText[4].innerHTML = "Brno zoo.";
    vidText[5].innerHTML = "Tutorial how to have the same app many times on iOS.";
    vidText[6].innerHTML = "Subscribe! Shot in Brno.";
    vidText[7].innerHTML = "Video of dog  hunting mice in Vysocina.";
    vidText[8].innerHTML = "This video shows the stupid design of Duolingo.";
    vidText[9].innerHTML = "Subscribe! Shot in Vysocina.";
    vidText[10].innerHTML = "Skittles Giants Gooey review.";
    vidText[11].innerHTML = "Video of a sleeping dog.";
}
    
function changeEverythingToCzech() {
    menuLinksList[0].innerHTML = "Domov";
    menuLinksList[2].innerHTML = "Podpořte dobro";
    
    longVidTitlesList[0].innerHTML = "CHALLENGE, VYDRŽ 24 HODIN V DIVOČINĚ!";
    longVidTitlesList[1].innerHTML = "Porovnávání Pití";
    longVidTextList[0].innerHTML = "Toto video bylo natočeno v Bezkydech v roce 2024. Jedná se o parodii. Kvalita není nejlepší protože video bylo natočeno a sestříháno na telefonu.";
    longVidTextList[1].innerHTML = "Tohle video je porovnání a recenze pití Fizi drink Ultra Boris a Mogu Mogu Grapes.";
    longVidTextList[2].innerHTML = "ideo s velmi špatnou kvalitou, natočeno v Qaqortoq, jížní Grónsko 2023.";
    
    vidTitleList[6].innerHTML = "To je výhodné...!!!";
    vidTitleList[9].innerHTML = "Odebíráte kanál Tadeas Tolver?";
    vidTitleList[10].innerHTML = "Ochutnávání Skittles Giants Gooey.";
    vidText[0].innerHTML = "Video natočeno z kabiny Air Greenland helikoptéry při odletu z Narsaqu, jížní Grónsko 2023.";
    vidText[1].innerHTML = "Zrychlené video natočeno z kabiny Air Greenland letadla Bombardier Dash 8 - 200 při přistání v Nuuku, Grónsko 2023.";
    vidText[2].innerHTML = "Video natočeno z lodě. Vodopád na hoře Sermitisiaq u Nuuku, zapadní Grónsko 2023.";
    vidText[3].innerHTML = "Vtipné videjko.";
    vidText[4].innerHTML = "Natočeno v Brněnské zoo.";
    vidText[5].innerHTML = "Návod jak na operačním systému iOS mýt jednu aplikaci mnohokrát.";
    vidText[6].innerHTML = "Odebírejte! Natočeno v Brně.";
    vidText[7].innerHTML = "Video jak pes honí myšky na Vysočině.";
    vidText[8].innerHTML = "Toto video ukazuje jak špatný design má Duolingo.";
    vidText[9].innerHTML = "Odebírejte! Natočeno na Vysočině.";
    vidText[10].innerHTML = "Ochutnávání Skittles Giants Gooey (sestra tam ruší!).";
    vidText[11].innerHTML = "Video spícího psa.";
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