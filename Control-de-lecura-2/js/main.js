let eventosOcurrido1 = false;
let eventosOcurrido2 = false;
let todoCorrecto = false;
let mensaje;
//Código para los rangos de los inputs
const precioVentaInput = document.getElementById('precio');
const primaInput = document.getElementById('prima');
const plazoInput = document.getElementById('plazo');
let plazo = parseFloat(plazoInput.value);
const interesInput = document.getElementById('interes');
const interesValorOutPut = document.getElementById('interes-valor');
const primaValorOutput = document.getElementById('prima-valor');
const plazoValorOutput = document.getElementById('plazo-valor');

let montoPrestamo;
let pagoMensual;
let InteresValor;
let textoCondiciones = document.getElementById('condiciones');

//Agregando el borde a las cards dependiendo cuál se selecciona
const cards = document.querySelectorAll('.card-vivienda');

cards.forEach(card => {
    card.addEventListener('click', function () {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        document.getElementById('condicion').style.display = 'block';
        eventosOcurrido1 = true;

        HabilitarForm();

        // verificando si la tarjeta activa es la de vivienda usada
        if (card.id === 'viviendaUsada') {
            viviendaUsada();
        } else if (card.id === 'viviendaNueva') { //Verificando si la tarjeta activa es vivienda Nueva
            viviendaNueva();
        }
    });
});

//Consideraciones para vivienda Usada
function viviendaUsada() {
    textoCondiciones.innerHTML =
        "<p>Tasa de interés nominal anual desde 8.25% para compra de vivienda usada. Monto mínimo a financiar para aplicar a crédito $30,000 y monto máximo $500,000.00. Si vives en El Salvador, el monto mínimo de prima es del 10% del monton total, si eres extranjero, corresponde al 15%.</p>";

    document.getElementById('interes').min = '8.25';
    document.getElementById('minInteres').textContent = '8.25%';
}

//Consideraciones para vivienda Nueva
function viviendaNueva() {
    textoCondiciones.innerHTML =
        "<p>Tasa de interés nominal anual desde 7.25% para compra de vivienda nueva. Crédito sujeto a la siguiente condición: monto mínimo a financiar para aplicar a crédito $30,000 y monto máximo $500,000.00. Si vives en El Salvador, el monto mínimo de prima es del 10% del monton total, si eres extranjero, corresponde al 15%.</p>";

    document.getElementById('interes').min = '7.25';
    document.getElementById('minInteres').textContent = '7.25%';
}

//Agregando el color de seleccionado al boton dependiendo si la persona vive o no en El Salvador
const buttons = document.querySelectorAll('.btnResidencia');
buttons.forEach(button => {
    button.classList.add('btn-secondary');
    button.addEventListener('click', function () {

        buttons.forEach(b => b.classList.remove('btn-primary', 'btn-secondary'));
        buttons.forEach(b => b.classList.add('btn-secondary'));


        button.classList.remove('btn-secondary');
        button.classList.add('btn-primary');
        eventosOcurrido2 = true;

        HabilitarForm();

        if (button.id === 'btnSi') {
            document.getElementById('prima').min = '10';
            document.getElementById('minPrima').textContent = '10%';
        } else if (button.id === 'btnNo') {
            document.getElementById('prima').min = '15';
            document.getElementById('minPrima').textContent = '15%';
        }
    });
});

function HabilitarForm() {
    if (eventosOcurrido1 && eventosOcurrido2) {
        document.getElementById('formulario').style.display = 'block';
        interesInput.disabled = true;
        plazoInput.disabled = true;
        primaInput.disabled = true;
    }
}

precioVentaInput.addEventListener('input', function () {
    const error = document.getElementById('error');
    const precioVenta = parseFloat(precioVentaInput.value)
    if (precioVenta >= 30000 && precioVenta <= 500000) {
        interesInput.disabled = false;
        plazoInput.disabled = false;
        primaInput.disabled = false;
        error.style.display = 'none';
        todoCorrecto = true;
    } else {
        error.style.display = 'block';
        error.textContent = 'Debe ingresar un monto válida entre $30,000 y $500,000';
        interesInput.disabled = true;
        plazoInput.disabled = true;
        primaInput.disabled = true;
    }
})

function actualizarInteres(interes) {
    interesValorOutPut.textContent = `${interes}%`;
}

function actualizarPrima(primaPorcentaje, primaValor) {
    primaValorOutput.textContent = `${primaPorcentaje}% ($${primaValor.toFixed(2)})`;
}

function actualizarPlazo(plazo) {
    plazoValorOutput.textContent = `${plazo} años`;
}

function calcular() {
    let precioVenta;
    if ((precioVentaInput.value) === '') {
        precioVenta = 0;
    } else {
        precioVenta = parseFloat(precioVentaInput.value);
    }
    const primaPorcentaje = parseFloat(primaInput.value);
    plazo = parseFloat(plazoInput.value);
    const interes = parseFloat(interesInput.value);
    InteresValor = interes / 100;
    const primaValor = (precioVenta * primaPorcentaje) / 100;
    montoPrestamo = precioVenta - primaValor;
    pagoMensual = (montoPrestamo * (InteresValor / 12)) / (1 - Math.pow(12 / (12 + InteresValor), 12 * plazo));

    actualizarPlazo(plazo);
    actualizarPrima(primaPorcentaje, primaValor);
    actualizarInteres(interes);

    mensaje = `
        Precio de Venta: $${precioVenta.toFixed(2)}
        Prima: ${primaPorcentaje}% ($${primaValor.toFixed(2)})
        Monto del Préstamo: $${montoPrestamo.toFixed(2)}
        Plazo: ${plazo} años
        Pago Mensual: $${pagoMensual.toFixed(2)}`;
}



// Este cierra el cuadro
document.getElementById('cerrarResultados').addEventListener('click', () => {
    document.getElementById('resultadosCuadro').style.right = '-900px';
});

// este imprime
document.getElementById('imprimirValores').addEventListener('click', function () {
    document.getElementById('error2').style.display = 'none';
    if (todoCorrecto) {
        document.getElementById('resultadoTexto').textContent = mensaje;
        document.getElementById('resultadosCuadro').style.right = '20px';
    } else {
        document.getElementById('error2').textContent = 'Debe completar correctamente los campos'
        document.getElementById('error2').style.display = 'block';
    }
});

document.getElementById('generarTabla').addEventListener('click', function () {
    let totalPagos = 12 * plazo;
    let Saldo = montoPrestamo;
    let numpago = [];
    let totales = [];
    let totalInteres = 0;
    let totalCapital = 0;

    for (let i = 0; i < totalPagos; i++) {
        let PagoInteres = Saldo * InteresValor / 12;
        let PagoCapital = pagoMensual - PagoInteres;
        Saldo = Saldo - PagoCapital;

        numpago.push({
            NumPago: i + 1,
            PagoInteres: '$ ' + PagoInteres.toFixed(2),
            PagoCapital: '$ ' + PagoCapital.toFixed(2),
            SaldoRestante: '$' + Saldo.toFixed(2),
        });
        totalInteres = totalInteres + PagoInteres;
        totalCapital = totalCapital + PagoCapital;
    }

    totales.push({
        TotalInteres: '$ ' + totalInteres.toFixed(2),
        TotalCapital: '$ ' + totalCapital.toFixed(2),
    })
    agregarTabla(numpago, totales);
});

function agregarTabla(PagoMensual, Totales) {
    const sectiontable = document.getElementById('TableSection');
    const tabla = document.getElementById('tablaAmortizacion').getElementsByTagName('tbody')[0];
    sectiontable.style.display = 'table';
    tabla.innerHTML = '';
    PagoMensual.forEach(fila => {
        const nuevaFila = tabla.insertRow();

        let Num = nuevaFila.insertCell(0);
        Num.textContent = fila.NumPago;

        let Interes = nuevaFila.insertCell(1);
        Interes.textContent = fila.PagoInteres;

        let Capital = nuevaFila.insertCell(2);
        Capital.textContent = fila.PagoCapital;

        let Restante = nuevaFila.insertCell(3);
        Restante.textContent = fila.SaldoRestante;
    });

    Totales.forEach(fila => {
        const nuevaFila = tabla.insertRow();

        let total = nuevaFila.insertCell(0);
        total.textContent = 'TOTALES';

        let totalInteres = nuevaFila.insertCell(1);
        totalInteres.textContent = fila.TotalInteres;

        let totalCapital = nuevaFila.insertCell(2);
        totalCapital.textContent = fila.TotalCapital;

        let Restante = nuevaFila.insertCell(3);
        Restante.textContent = '🏠';
    })



}







