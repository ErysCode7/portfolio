import { heroTitle } from "./hero.js";

const body = document.body;
const heroText = document.querySelector("#hero__text");

if(window.innerWidth > 768) {
    const timeline = gsap.timeline({defaults: {duration: 1, ease: "power2.easeInOut"}})
    timeline
        .fromTo(heroText, {opacity: 0, delay: .5}, {opacity: 1})
        .from(heroText, {x: "100%"})
        .from(heroTitle, {opacity: 0, y: "100%", delay: .5})
        .from(body, {overflow: "hidden", duration: 4})   
}



if(window.innerWidth <= 768) {
    const timeline = gsap.timeline({defaults: {duration: 1, ease: "power2.easeInOut"}})
    timeline
        .fromTo(heroText, {opacity: 0, delay: .5}, {opacity: 1})
        .from(heroText, {x: "100vw"})
        .from(heroTitle, {opacity: 0, y: "100%", delay: .5}) 
}

   