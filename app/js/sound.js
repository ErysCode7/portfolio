export const sound = document.querySelector("#sound");
export const audio = document.querySelector("#audio");
export const soundCloud = document.querySelector("#sound-cloud");
export const soundOffText = document.querySelector("#sound-off");
export const soundOnText = document.querySelector("#sound-on");

sound.addEventListener("click", (e) => {
    if(!soundCloud.classList.contains("click") && !soundOffText.classList.contains("click") && !soundOnText.classList.contains("click")) {
        soundCloud.classList.add("click");
        soundOffText.classList.add("click");
        soundOnText.classList.add("click");
        audio.play();
    } else if(soundCloud.classList.contains("click") && soundOffText.classList.contains("click") && soundOnText.classList.contains("click")) {
        soundCloud.classList.remove("click");
        soundOffText.classList.remove("click");
        soundOnText.classList.remove("click");
        audio.pause();
    }
});


