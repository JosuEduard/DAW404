const imagenes = document.querySelectorAll("#visor .publicidad");
const flechaIzq = document.getElementById("arrowiz");
const flechaDer = document.getElementById("arrowder");

let indexActual = 0;

function mostrarImagen(indice) {
    imagenes.forEach((imagen, i) => {
        if (i === indice) {
            imagen.style.display = "block";
        } else {
            imagen.style.display = "none";
        }
    });
}

mostrarImagen(indexActual);

flechaDer.addEventListener("click", function() {
    indexActual = (indexActual + 1) % imagenes.length;
    mostrarImagen(indexActual);
});

flechaIzq.addEventListener("click", function() {
    indexActual = (indexActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indexActual);
});