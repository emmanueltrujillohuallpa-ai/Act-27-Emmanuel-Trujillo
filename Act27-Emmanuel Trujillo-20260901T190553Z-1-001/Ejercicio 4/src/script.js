
document.getElementById("pizza").addEventListener("change", function() {
    let precio = this.value;

    document.getElementById("precio").value = "$" + precio;
});


