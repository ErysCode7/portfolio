export const hamburger = document.querySelector("#hamburger");
export const aside = document.querySelector("#aside");

hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("active");
    hamburger.classList.toggle("not-active");
    aside.classList.toggle("show");
})

window.addEventListener("resize", (e) => {
    if(window.innerWidth > 768) {
        hamburger.classList.remove("active");
        hamburger.classList.add("not-active");
        aside.classList.remove("show");
    }
})

