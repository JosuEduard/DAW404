alert('Taller Practico 01 - DAW')

function convertirTemperatura() {
    let tempInput = document.getElementById("tempInput").value;
    let tempSelect = document.getElementById("tempSelect").value;
    let celsius, fahrenheit, kelvin;

    if (tempSelect === "celsius") {
        celsius = parseFloat(tempInput);
        fahrenheit = celsiusToFahrenheit(celsius);
        kelvin = celsiusToKelvin(celsius);
    } else if (tempSelect === "fahrenheit") {
        fahrenheit = parseFloat(tempInput);
        celsius = fahrenheitToCelsius(fahrenheit);
        kelvin = celsiusToKelvin(celsius);
    } else if (tempSelect === "kelvin") {
        kelvin = parseFloat(tempInput);
        celsius = kelvinToCelsius(kelvin);
        fahrenheit = celsiusToFahrenheit(celsius);
    }

    mostrarResultados(celsius, fahrenheit, kelvin);
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return 5*(fahrenheit - 32)/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

let boton = document.getElementById(boton);

function mostrarResultados(celsius, fahrenheit, kelvin) {
    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p>Celsius: ${celsius.toFixed(2)} °C</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
        <p>Kelvin: ${kelvin.toFixed(2)} K</p>
    `;
}