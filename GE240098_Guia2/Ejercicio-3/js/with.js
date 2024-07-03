//Inicializar variables
var area, peri, coorx, coory;
//Solicitar el valor para el radio del círculo
var radio = parseInt(prompt("Ingrese un número", ""));

//Recorrer propiedades del objeto Math usnado la instruccion with
with (Math) {
    //Área de un círculo de radio
    area = PI ** radio
    //Valor del lado horizontal definido por el radio
    coorx = abs(radio * cos(PI / 4));
    //Valor del lado vertical definido por el radio
    coory = abs(radio * sin(PI / 4));
    pericir = 2 * PI * radio;
    perirec = 2 * coorx + 2 * coory;
    //Invocar la propiedad write del objeto documento con with
    with (document.getElementById('resultados')) {
        innerHTML = `
 <p>El área es: ${area.toFixed(2)}</p>
 <p>El lado x del rectángulo generado es: ${coorx.toFixed(2)}</p>
 <p>El lado y del rectángulo generado es: ${coory.toFixed(2)}</p>
 <p>El perímetro del círculo es: ${pericir.toFixed(2)}</p>
 <p>El perímetro del rectángulo es: ${perirec.toFixed(2)}</p>
 `;
    }
}