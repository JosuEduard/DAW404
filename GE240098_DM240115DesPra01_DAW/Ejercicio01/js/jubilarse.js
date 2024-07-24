alert('Taller Practico 01 - DAW')
let name = prompt('Digite su nombre: ')
let edad = parseInt(prompt('Digite su edad: '))
let sexo = prompt('Digite su sexo (M/F): ')

if(edad >= 60 && sexo === 'M'){
  document.write(`<h1>${name}, sí se puede jubilar</h1>`)
}
else if (edad < 60 && sexo === 'M'){
  document.write(`<h1>${name}, no puede jubilarse aún le faltan ${60 - edad} años`)
}

if(edad >= 54 && sexo === 'F'){
  document.write(`<h1>${name}, sí se puede jubilar</h1>`)
}
else if (edad < 60 && sexo === 'F'){
  document.write(`<h1>${name}, no puede jubilarse aún le faltan ${54 - edad} años`)
}