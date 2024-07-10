var aleatorios;
var min, max, cantidad;
var disparador, listado;
function init() {
  //Declaración del arreglo o matriz de forma literal
  //que contendrá los números aleatorios
  aleatorios = [];
  disparador = document.getElementById("generador"); 
  listado = document.getElementById("listanumeros"); 

  if (disparador.addEventListener) {
    disparador.addEventListener('click', function (evt) {
      capturaDatos();
    }, false);
  }
  else if (disparador.attachEvent) {
    disparador.attachEvent('onclick', function (evt) {
      capturaDatos();
    });
  }

  function capturaDatos() {
    //Declaración y asignación de los límites entre
    //los cuales estarán comprendidos los números aleatorios    
    min = parseInt(document.getElementById("min").value);
    max = parseInt(document.getElementById("max").value);
    cantidad = parseInt(document.getElementById("cantidad").value);
    aleatorio(min, max, cantidad);
    listado.innerHTML = "Los números aleatorios son: " + aleatorios.toString();
  }

  function aleatorio(minimo, maximo, cantidad) {
    // Generando un número aleatorio teniendo el cuidado
    // que esté comprendido entre los valores mínimo y máximo 

    var numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo; 
    
    //Verificar que no se haya llegado a la cantidad 
    // de números aleatorios máximo establecidos 
    if (aleatorios.length < cantidad) {
    // Agregar el número aleatorio al arreglo o matriz
    //utilizando el método push()
    aleatorios.push(numero);
    //Invocar recursivamente a la función aleatorio 
    aleatorio(minimo, maximo, cantidad);
  }
}
}
  window.onload = init;