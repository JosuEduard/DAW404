/**
 * Programa que al pasar el mouse por las imagenes de los libros muestra el nombre de cada libro abajo
 * Utilizando AJAX 
 */

let solicitudAsinc;

function registrarManejadores() {


  //Mostrar y eliminar el nombre del libro del primer ID 

  const imgCss = document.getElementById('csstecprof');
  imgCss.addEventListener('mouseover', () => obtenerContenido('1'));
  imgCss.addEventListener('mouseout', borrarContenido, false);

  //Mostrar y eliminar el nombre del libro del segundo ID 

  const imgJava = document.getElementById('java8');
    imgJava.addEventListener('mouseover', () => obtenerContenido('2'));
    imgJava.addEventListener('mouseout', borrarContenido);

  //Mostrar y eliminar el nombre del libro del tercer ID 

  const imgNinja = document.getElementById('jsninja');
  imgNinja.addEventListener('mouseover', () => obtenerContenido('3'));
  imgNinja.addEventListener('mouseout', borrarContenido);

  //Mostrar y eliminar el nombre del libro del cuarto ID 

  const imgNode = document.getElementById('nodejs');
  imgNode.addEventListener('mouseover', () => obtenerContenido('4'));
  imgNode.addEventListener('mouseout', borrarContenido);
}




function obtenerContenido(id) {
  //Insertar crear objeto XMLHttpRequest y realizar la peticiónes

  // ? Faltaba books/ en la URL
  const URL = 'https://66f97744afc569e13a98dd50.mockapi.io/api/example/books/' + id;
  try {
    solicitudAsinc = new XMLHttpRequest;
    solicitudAsinc.addEventListener('readystatechange', cambiarEstado);

    //Preparar la solicitud
    solicitudAsinc.open('GET', URL, true);
    //Enviar la solicitud
    solicitudAsinc.send(null);
  }
  catch (exception) {
    alert('No se proceso la petición AJAX');
  }
}

//Función que quita todo el contenido que está adentro del div#descriptios
function borrarContenido() {
  document.getElementById('descriptions').innerHTML = '';
}


function cambiarEstado() {
  if (solicitudAsinc.readyState == 4 && solicitudAsinc.status == 200) {
    //Devuelve el contenido en la petición en el div descriptions
    const jsonDescription = solicitudAsinc.responseText;
    document.getElementById('descriptions').innerHTML = JSON.parse(jsonDescription).description;
  }
}

window.addEventListener('load', registrarManejadores);