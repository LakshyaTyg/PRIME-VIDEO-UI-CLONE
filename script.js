
let b = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        b.style.backgroundColor = "rgba(49, 44, 64, 0.5)";
        b.style.backdropFilter = "blur(20px)";

       
    } else {
        b.style.opacity = "1";
        b.style.backgroundColor = "black";
         b.style.backdropFilter = "blur(0px)";
    }
})

