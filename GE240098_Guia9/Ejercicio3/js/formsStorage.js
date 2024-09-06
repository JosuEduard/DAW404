let valor;

function init() {
  let seleccion = document.getElementById('seleccionar');
  if (seleccion.addEventListener) {
    seleccion.addEventListener('click', mostrar, false);
  } else if (seleccion.attachEvent) { // Compatibilidad con navegadores antiguos
    seleccion.attachEvent('onclick', mostrar);
  }
}

function mostrar() {
  // Determinando la opción seleccionada
  let opcion = document.forms['form'].methods.options[document.forms['form'].methods.selectedIndex].value;

  switch (opcion) {
    case 'api':
      localStorage.setItem('Bienvenida', 'Bienvenidos a Local Storage con API de JavaScript');
      valor = localStorage.getItem('Bienvenida');
      break;

    case 'array':
      localStorage['Bienvenida'] = 'Bienvenidos, también se pueden utilizar notación de Matrices';
      valor = localStorage['Bienvenida']; // Cambiado para usar "B" mayúscula
      break;

    case 'object':
      localStorage.bienvenida = 'Bienvenidos, igual podemos usarlo como propiedades de objeto';
      valor = localStorage.bienvenida;
      break;

    default:
      alert('Esta opción no existe');
      return;
  }

  let contenido = document.getElementById('content');
  contenido.innerHTML = `<p>Usando : <strong>${opcion}</strong> - ${valor}</p>`;
}

// Añadiendo el evento cuando la página carga
if (window.addEventListener) {
  window.addEventListener("load", init, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", init); // Compatibilidad con navegadores antiguos
}