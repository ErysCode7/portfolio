const heroName = document.querySelector("#hero-name");
export const heroTitle = document.querySelector("#hero-title");

const heroNameTxt = heroName.innerText;

const heroNameSplitTxt = heroNameTxt.split("");


heroName.innerText = "";


for(let i = 0; i < heroNameSplitTxt.length; i++) {
    heroName.innerHTML += "<span>" + heroNameSplitTxt[i] + "</span>";
}


let charName = 0;


const completeName = () => {
    clearInterval(timerName);
    timerName = null;
}

const onTick = () => {
    const span = heroName.querySelectorAll("span")[charName];
    span.classList.add("fade");
    charName++;
    if(charName === heroNameSplitTxt.length) {
        completeName();
        return;
    }
}

let timerName = setInterval(onTick, 250);


