var burger = document.querySelector(".burger");
var links = document.querySelector(".nav-links");

burger.addEventListener('click', () => {
    links.classList.toggle('open');
});