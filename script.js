document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navmenu = document.querySelector(".navbaritems");
    const orderbutton = document.querySelector(".orderbutton");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navmenu.classList.toggle("active");
        orderbutton.classList.toggle("active");
    });
});

var navbar = document.querySelector(".navbarcontent");
var originalBackgroundColor = window.getComputedStyle(navbar).backgroundColor;

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "black";
    } else {
        navbar.style.backgroundColor = originalBackgroundColor;
    }
});
