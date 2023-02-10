const boton_encendido = document.getElementById("mostrar");
boton_encendido.addEventListener("click", function() {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(function(element) {
        element.classList.toggle("hidden");
    });
});