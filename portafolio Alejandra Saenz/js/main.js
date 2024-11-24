document.addEventListener("DOMContentLoaded", function () {
    const filtros = document.querySelectorAll(".filtro");
    const tarjetas = document.querySelectorAll(".tarjeta-cuerpo");

    filtros.forEach(filtro => {
        filtro.addEventListener("click", function () {
            const categoria = this.dataset.categoria;

            tarjetas.forEach(tarjeta => {
                if (categoria === "todos") {
                    tarjeta.style.display = "block"; // Muestra todas
                } else if (tarjeta.classList.contains(categoria)) {
                    tarjeta.style.display = "block"; // Muestra las que coinciden
                } else {
                    tarjeta.style.display = "none"; // Oculta las demás
                }
            });
        });
    });
});
