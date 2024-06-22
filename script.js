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
