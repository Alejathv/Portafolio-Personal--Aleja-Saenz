 // Función para filtrar los elementos
 function filterSelection(category) {
    var items = document.getElementsByClassName("portfolio-item");

    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none"; // Oculta todos los proyectos

        if (category === "all" || items[i].classList.contains(category)) {
            items[i].style.display = "block"; // Muestra los proyectos de la categoría seleccionada
        }
    }
}

// Muestra todos los elementos al cargar la página
filterSelection("all");