// Declarando e inicialización variables
let i, promedio = 0.0;
let alumno, tabla = "";
let notas = [];
let n = parseInt(prompt("¿Cuántas notas va ingresar?", ""));
alumno = prompt("Ingrese el nombre del alumno: ", "");

// Ciclo para capturar las notas
for (i = 0; i < n; i++){
  notas[i] = parseFloat(prompt(`Ingrese la nota ${i + 1}`));
}

tabla += "<div class=\"container mt-5\">\n";
tabla += "<table class=\"table table-bordered\">\n";
tabla += "<caption>Evaluaciones y promedio de " + alumno + "</caption>";
tabla += "<thead class=\"thead-dark\">\n<tr>\n<th scope=\"col\">Evaluaciones</th>\n<th scope=\"col\">Notas</th>\n</tr>\n</thead>\n<tbody>\n";

// Obteniendo el promedio y construyendo la tabla

for(i = 0; i<notas.length; i++){
  promedio += notas[i];
  tabla +=  "<tr>\n<td>Evaluación " + (i+1) + "</td>\n<td class=\"nota\">" + notas[i] + "</td>\n</tr>\n";
}

promedio /= notas.length;
promedio = Math.round(promedio * Math.pow(10, 2)) / Math.pow(10, 2);
tabla += `<tr>\n<th>Promedio</th>\n<td class = "nota"> ${promedio} </td>\n </tr>\n`;
tabla += `<tbody>\n</table>\n</div>`;

// Mostramos las tablas en el documento

document.writeln(tabla);

