
document.getElementById("mostrar").addEventListener("click", function() {
    let deportes = [];

    if (document.getElementById("futbol").checked) {
        deportes.push("Fútbol");
    }

    if (document.getElementById("basquet").checked) {
        deportes.push("Básquet");
    }

    if (document.getElementById("tenis").checked) {
        deportes.push("Tenis");
    }

    if (deportes.length == 0) {
        document.getElementById("resultado").textContent =
            "No seleccionaste ningún deporte.";
    } else {
        document.getElementById("resultado").textContent =
            "Deportes elegidos: " + deportes.join(", ");
    }
});

