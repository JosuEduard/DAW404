// Craer tabla con colores hexadecimales
let contenido = "<h1>Tabla de colores hexadecimales</h1>";

contenido += "<hr>";
contenido += "<table class = \"table table-bordered table-hover\" align='center'><tr>"

//Creamos tres arreglos con valores de cadena que respresentas valores hexadecimales

let ncel = 0;

let r = ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99", "AA", "BB", "CC", "DD", "EE", "FF"];
let g = ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99", "AA", "BB", "CC", "DD", "EE", "FF"];
let b = ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99", "AA", "BB", "CC", "DD", "EE", "FF"];

//Creamos tres bucles anidando uno adentro de otro

for (let i = 0; i < r.length; i++) {
  for (let j = 0; j < g.length; j++) {
    for (let k = 0; k < b.length; k++) {
      // Se crea el color 
      let nuevoColor = "#" + r[i] + g[j] + b[k];
      if (ncel % 7 == 0) {
        contenido += "<tr>";
      }
      // Se imprime el color 
      contenido += `<td style = "text-align: center; background-color: ${nuevoColor}"> ${nuevoColor} </td>`
      ncel++;
      if (ncel % 7 == 0) {
        contenido += "</tr>";

      }
    }
  }
}

contenido += "</tr></table>";

//Inserte el contenido en #resultado

document.getElementById("resultado").innerHTML = contenido;
