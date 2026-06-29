const menuBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav__menu");
const menuItems = document.querySelectorAll(".menu__item");

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