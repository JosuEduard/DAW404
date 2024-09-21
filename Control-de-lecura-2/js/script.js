const precioVentaInput = document.getElementById('precio');
const primaInput = document.getElementById('prima');
const plazoInput = document.getElementById('plazo');
const primaValorOutput = document.getElementById('prima-valor');
const plazoValorOutput = document.getElementById('plazo-valor');
const pagoMensualOutput = document.getElementById('pago-mensual');
const interesMesOutput = document.getElementById('interes-mes');
const pagoCapitalOutput = document.getElementById('pago-capital');
const nuevoSaldoOutput = document.getElementById('nuevo-saldo');

const tasaInteresAnual = 0.0825;
let saldoPrincipal = 0;

function actualizarPrima() {
    const precioVenta = parseFloat(precioVentaInput.value);
    const primaPorcentaje = primaInput.value;
    const primaValor = (precioVenta * primaPorcentaje) / 100;
    primaValorOutput.textContent = `${primaPorcentaje}% ($${primaValor.toFixed(2)})`;
    calcular();
}

function actualizarPlazo() {
    const plazo = plazoInput.value;
    plazoValorOutput.textContent = `${plazo} años`;
    calcular();
}

function calcular() {
    const precioVenta = parseFloat(precioVentaInput.value);
    const primaPorcentaje = primaInput.value;
    const plazo = plazoInput.value;


    const primaValor = (precioVenta * primaPorcentaje) / 100;
    const montoPrestamo = precioVenta - primaValor;

    if (saldoPrincipal === 0) {
        saldoPrincipal = montoPrestamo;
    }

    const tasaMensual = tasaInteresAnual / 12;
    const numeroPagos = plazo * 12;

    const pagoMensual = (montoPrestamo * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -numeroPagos));
    pagoMensualOutput.textContent = `$${pagoMensual.toFixed(2)}`;

    const interesMes = saldoPrincipal * tasaMensual;
    interesMesOutput.textContent = `$${interesMes.toFixed(2)}`;

    const pagoCapital = pagoMensual - interesMes;
    pagoCapitalOutput.textContent = `$${pagoCapital.toFixed(2)}`;

    saldoPrincipal -= pagoCapital;
    nuevoSaldoOutput.textContent = `$${saldoPrincipal.toFixed(2)}`;
}

// Inicializar valores
actualizarPrima();
actualizarPlazo();
