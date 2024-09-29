//Inicializando variables

let numeros = [];

let i, j, max, temp;

/**
 *  Validación para que el número de elementos del arreglo sea
 *  numérico y mayor o igual que 2
 */

do {
  max = prompt("Cuántos números va a ingresar (valor entero): ", "");
  //Verificar que se agrege un dato númerico
  if (isNaN(max)) {
    alert("El valor digitado no es numérico.");
    continue;
  }
  //Verificar que el valor ingresado sea mayor o igual a 2
  if (max < 2) {
    alert("El arreglo debe de ser de dimensión 2 o superior");

  }

} while (isNaN(max) || max < 2);

// Lazo para solicitar el ingreso de los elementos del arreglo
for (i = 0; i < max; i++) {
  numeros[i] = parseInt(prompt(`Número: ${parseInt(i) + 1} `))
}

//Crear el contenido HTML
let contenido = `<h1>Números ingresados</h1>`;
contenido += `<hr>`;
contenido += `<table class = \"table table-bordered table-hover \"><tr>`;

for (i = 0; i < max; i++) {
  contenido += "<td class=\"Off\" onmouseover =\"this.className='On'\" onmouseout =\"this.className='Off'\">" + numeros[i] + "</td>";
}
contenido += "</tr></table>";

// Lazo que ordena el array por medio del método de la burbuja

for (i = 0; i < max - 1; i++) {
  for (j = i + 1; j < max; j++) {
    if (numeros[i] > numeros[j]) {
      temp = numeros[j];
      numeros[j] = numeros[i];
      numeros[i] = temp;
    }
  }
}

contenido += "<h1 class=\"mt-5\">Números ordenados ascendentemente</h1>"; contenido += "<hr>";
contenido += "<table class=\"table table-bordered table-hover\"><tr>"; 

for (i = 0; i < max; i++) {
  contenido += "<td class=\"Off\" onmouseover =\"this.className='On'\" onmouseout =\"this.className='Off'\">" + numeros[i] + "</td>";
}

contenido += "</tr></table>";
// Insertar el contenido en el div#resultado
document.getElementById("resultado").innerHTML = contenido;