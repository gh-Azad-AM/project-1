const navbar = document.querySelector(".nav");
const navBtn = document.querySelector(".nav-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#close-btn");
const date = document.querySelector("#date");

window.addEventListener("scroll", function() {
    if (this.window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});

navBtn.addEventListener("click", function() {
    sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
});

date.innerHTML = new Date().getFullYear();
