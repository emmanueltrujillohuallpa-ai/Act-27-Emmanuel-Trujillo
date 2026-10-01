document.getElementById("calcular").addEventListener("click", function() {
    let procesador = Number(document.getElementById("procesador").value);
    let monitor = Number(document.getElementById("monitor").value);
    let disco = Number(document.getElementById("disco").value);

    let total = procesador + monitor + disco;

    document.getElementById("total").value = "$" + total;
});
