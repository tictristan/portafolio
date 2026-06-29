const modal = document.getElementById("modal");
const closeModal = document.querySelector(".modal__close");

document.querySelectorAll(".details-btn").forEach(btn => {

    btn.addEventListener("click", e => {

        e.preventDefault();

        modal.style.display = "flex";

        // Contenido
        document.getElementById("modal-title").textContent = btn.dataset.title || "";

        document.getElementById("modal-description").textContent =
            btn.dataset.description || "";

        document.getElementById("modal-problem").textContent =
            btn.dataset.problem || "";

        document.getElementById("modal-solution").textContent =
            btn.dataset.solution || "";

        document.getElementById("modal-role").textContent =
            btn.dataset.role || "";

        // Imagen
        const img = document.getElementById("modal-img");

        if (btn.dataset.img) {
            img.src = btn.dataset.img;
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }

        // Tecnologías
        const techContainer = document.getElementById("modal-tech");
        techContainer.innerHTML = "";

        if (btn.dataset.tech) {

            btn.dataset.tech.split(",").forEach(tech => {

                const span = document.createElement("span");

                span.textContent = tech.trim();

                techContainer.appendChild(span);

            });

        }

        // Demo
        const demo = document.getElementById("modal-demo");

        if (btn.dataset.demo && btn.dataset.demo !== "#") {

            demo.href = btn.dataset.demo;
            demo.style.display = "inline-block";

        } else {

            demo.style.display = "none";

        }

        // GitHub
        const github = document.getElementById("modal-github");

        if (btn.dataset.github && btn.dataset.github !== "#") {

            github.href = btn.dataset.github;
            github.style.display = "inline-block";

        } else {

            github.style.display = "none";

        }

    });

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", e => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});