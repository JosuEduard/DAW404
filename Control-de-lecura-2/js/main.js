//Agregando el borde a las cards dependiendo cuál se selecciona
const cards = document.querySelectorAll('.card-vivienda');
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    // verificando si la tarjeta activa es la de vivienda usada
    if (card.id === 'viviendaUsada') {
      let textoCondiciones = document.getElementById('condiciones');
      textoCondiciones.innerHTML = 
      "<p>Tasa de interés nominal anual desde 8.25% para compra de vivienda usada. ** Cuota calculada de acuerdo al plazo elegido en el formulario, incluye capital e intereses. Crédito sujeto a las siguientes condiciones: para inmuebles de uso habitacional, monto mínimo a financiar para aplicar a crédito $30,000 y monto máximo $500,000.00. Valor mínimo de garantía $40,000 para zonas foráneas, es decir zonas fuera de los departamentos de San Salvador y La libertad, y valor mínimo de garantía de $60,000 para los departamentos de San Salvador y La Libertad. Comisión por estructuración de 1.60%, mínimo de $1,000.00 + IVA hasta máximo de $1,500.00 + IVA. Requiere contratación de seguro de vida y daños. Aprobación de financiamiento sujeta a políticas de créditos vigentes.</p>";
    }
  });
});





//Código para los rangos de los inputs

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

actualizarPrima();
actualizarPlazo();
