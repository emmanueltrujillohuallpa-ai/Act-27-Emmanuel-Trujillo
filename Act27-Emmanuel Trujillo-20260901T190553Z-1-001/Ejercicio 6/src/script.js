
document.getElementById("corregir").addEventListener("click", function() {
    let correctas = 0;
    let incorrectas = 0;

    let respuestas = [
        document.getElementById("pregunta1").value,
        document.getElementById("pregunta2").value,
        document.getElementById("pregunta3").value,
        document.getElementById("pregunta4").value
    ];

    for (let i = 0; i < respuestas.length; i++) {
        if (respuestas[i] == "correcta") {
            correctas++;
        } else {
            incorrectas++;
        }
    }

    document.getElementById("resultado").textContent =
        "Respuestas correctas: " + correctas +
        " | Respuestas incorrectas: " + incorrectas;
});

