
/* ==========================================
   LA FÁBRICA DE LAS MILANESAS
   BIENVENIDA BLACK FRIDAY
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const welcome = document.getElementById("bfWelcome");
    const welcomeButton = document.getElementById("bfWelcomeButton");

    if (!welcome || !welcomeButton) return;

    const SESSION_KEY = "blackFridayWelcomeSeen";

    // Comprobar si ya se mostró durante esta sesión
    if (sessionStorage.getItem(SESSION_KEY)) {
        welcome.style.display = "none";
        return;
    }

    // Mostrar la tarjeta al ingresar
    document.body.classList.add("modal-open");

    setTimeout(() => {
        welcome.classList.add("active");
    }, 300);


    // Cerrar la bienvenida y entrar al catálogo
    function closeWelcome() {

        welcome.classList.remove("active");
        welcome.classList.add("closing");

        document.body.classList.remove("modal-open");

        sessionStorage.setItem(SESSION_KEY, "true");

        setTimeout(() => {

            welcome.style.display = "none";

            // Llevar al visitante a la primera categoría
            const catalogo = document.getElementById("milanesas");

            if (catalogo) {
                catalogo.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        }, 400);
    }

    welcomeButton.addEventListener("click", closeWelcome);


    // Permitir cerrar con la tecla Escape
    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            welcome.classList.contains("active")
        ) {
            closeWelcome();
        }

    });

});
