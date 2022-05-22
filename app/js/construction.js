const constructionTitle = document.querySelector("#cons-title");
const constructionTitleTxt = constructionTitle.innerText;
const constructionTitleSplitTxt = constructionTitleTxt.split("");
constructionTitle.innerText = "";

for(let i = 0; i < constructionTitleSplitTxt.length; i++) {
    constructionTitle.innerHTML += "<span>" + constructionTitleSplitTxt[i] + "</span>";
}

let charName = 0;

const completeName = () => {
    clearInterval(timerName);
    timerName = null;
}

const onTick = () => {
    const span = constructionTitle.querySelectorAll("span")[charName];
    span.classList.add("fade");
    charName++;
    if(charName === constructionTitleSplitTxt.length) {
        completeName();
        return;
    }
}

let timerName = setInterval(onTick, 250);

//animations
if(window.innerWidth <= 768) {
    const constructionSVG = document.querySelector("#freepik_stories-software-engineer");
    
    const timeline = gsap.timeline({defaults: {duration: 1, ease: "power2.easeInOut"}});
    timeline
        .from(constructionSVG, {x: "-100vw", delay: .5});
}