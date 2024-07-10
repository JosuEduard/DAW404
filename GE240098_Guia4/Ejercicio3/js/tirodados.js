/**
 * Tod el módulo se encuentra dentro de una función
 * conocidad como función inmediata, en este caso
 * También anónima que provoca que todo se ejecute
 * de una vez
 */
(function () {
  if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
  }
  else{
    window.attachEvent("onload", iniciar);
  }
  //Variables utilizadas para interactuar
  //con los elementos img presentes en la página

  let imagenDado1;
  let imagenDado2;
  let imagenDado3;
  let imagenDado4;
  let imagenDado5;
  let imagenDado6;

  //Registrar componentes de escucha del evento clic
  //Al presionar el botón denominado botonTirar y obtener
  // Tdos los elementos img presentes en el documento
  function iniciar() {
    let boton = document.getElementById("botonTirar");
    if (boton.addEventListener) {
      boton.addEventListener("click", tirarDados, false);
    }else{
      boton.attachEvent("onclick", tirarDados);
    }

    imagenDado1 = document.getElementById("dado1");
    imagenDado2 = document.getElementById("dado2");
    imagenDado3 = document.getElementById("dado3");
    imagenDado4 = document.getElementById("dado4");
    imagenDado5 = document.getElementById("dado5");
    imagenDado6 = document.getElementById("dado6");
  }

  function tirarDados() {
    establecerImagen(imagenDado1);
    establecerImagen(imagenDado2);
    establecerImagen(imagenDado3);
    establecerImagen(imagenDado4);
    establecerImagen(imagenDado5);
    establecerImagen(imagenDado6);
  }
  function establecerImagen(imgDado) {
    let valorDado = Math.floor(1+Math.random()*6);
    //Estableciendo el atributo src de la imagen
    imgDado.setAttribute("src", "img/dice" + valorDado + ".png");
    //Estableciendo el atributo alt de la imagen
    imgDado.setAttribute("alt", "Imagen del dato con el valor " + valorDado);
  }
})();