const menuBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav__menu");
const menuItems = document.querySelectorAll(".menu__item");


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__link");


if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Cierra el menú al hacer click en un enlace (modo móvil)
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

}

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});