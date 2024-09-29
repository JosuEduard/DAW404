class Estudiante {
  constructor() {
    this.nombre = '';
    this.carnet = '';
    this.carrera = '';
    this.materia = '';
    this.precioLaboratorio = 0;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  setCarnet(carnet) {
    this.carnet = carnet;
  }

  setCarrera(carrera) {
    this.carrera = carrera;
  }

  setMateria(materia) {
    this.materia = materia;
  }

  setPrecioLaboratorio(precio) {
    this.precioLaboratorio = precio;
  }

  mostrarInfo() {
    return `${this.nombre}, ${this.carnet}, ${this.carrera}, ${this.materia}, ${this.precioLaboratorio}`;
  }
}

const estudiantes = [];

document.getElementById('carrera').addEventListener('change', function () {
  let carrera = document.getElementById('carrera').value;
  let selectMaterias = document.getElementById('materiasSelect');
  selectMaterias.innerHTML = '';

  if (carrera == "Ingeniería en Computación") {
    let materias = [
      "Cálculo Diferencial",
      "Quimica General", 
      "Antropología Filosófica",
      "Programación Estructurada"];
    materias.forEach(function (valor) {
      let opcion = document.createElement("option");
      opcion.text = valor;
      opcion.value = valor;
      selectMaterias.add(opcion);
    });
  } else if (carrera == "Ingeniería Industrial") {
    let materias = [
      "Antropología Filosófica",
      "Pensamiento Social Cristiano", 
      "Algebra Vectorial y Matrices",
      "Cálculo Diferencial"];
    materias.forEach(function (valor) {
      let opcion = document.createElement("option");
      opcion.text = valor;
      opcion.value = valor;
      selectMaterias.add(opcion);
    });
  } else if (carrera == "Ingeniería en Telecomunicaciones") {
    let materias = [
      "Cálculo Diferencial", 
      "Quimica General", 
      "Expresión oral y Escrita",
      "Antropología Filosófica"];
    materias.forEach(function (valor) {
      let opcion = document.createElement("option");
      opcion.text = valor;
      opcion.value = valor;
      selectMaterias.add(opcion);
    });
  } else if (carrera == "Licenciatura en Diseño Gráfico") {
    let materias = [
      "Antropología Filosófica",
      "Pensamiento Social Cristiano", 
      "Investigación, Creatividad e Innovación", 
      "Sistema del Lenguaje Visual"];
    materias.forEach(function (valor) {
      let opcion = document.createElement("option");
      opcion.text = valor;
      opcion.value = valor;
      selectMaterias.add(opcion);
    });
  } else if (carrera == "Técnico en Computación") {
    let materias = [
      "Antropología Filosófica", 
      "Programación de Algoritmos", 
      "Lenguaje de Marcado y estilo web", 
      "Redes de Comunicación"
    ];
    materias.forEach(function (valor) {
      let opcion = document.createElement("option");
      opcion.text = valor;
      opcion.value = valor;
      selectMaterias.add(opcion);
    });
  } else if (carrera == "Técnico en Control de la Calidad") {
    let materias = [
      "Algebra Vectorial y Matrices",
      "Antropología Filosófica",
      "Control Estadistico de procesos",
      "Administración de la calidad"
    ];
    materias.forEach(function (valor) {
      let opcion = document.createElement("option");
      opcion.text = valor;
      opcion.value = valor;
      selectMaterias.add(opcion);
    });
  }
})





document.getElementById('registrar').addEventListener('click', function () {

  const estudiante = new Estudiante();

  // Obteniendo los valores del formulario
  const nombre = document.getElementById('nombre').value.trim();
  let nombretest = ''
  const carnet = document.getElementById('carnet').value.trim();
  let carnettest = /^[A-Z]{2}[0-9]{6}$/;
  const carrera = document.getElementById('carrera').value;
  const materia = document.getElementById('materiasSelect').value;
  let precioLab = 0;

  if (materia == 'Cálculo Diferencial' || materia == 'Quimica General' || 
    materia == 'Programación Estructurada' || materia == 'Investigación, Creatividad e Innovación' || 
    materia == 'Sistema del Lenguaje Visual') {
    precioLab = 50;
  } else if (materia == 'Antropología Filosófica' || 
    materia == 'Expresión oral y Escrita' || 
    materia == 'Pensamiento Social Cristiano' ||
    materia == 'Algebra Vectorial y Matrices') {
    precioLab = 0;
  } else {
    precioLab = 42;
  }

  precioLab = parseFloat(precioLab);

  if (!carnettest.test(carnet)) {
    alert("El carnet no cumple con el formato correcto, intente de nuevo");
    return;
  }

  if (nombre && carnet && carrera && materia && !isNaN(precioLab)) {
    estudiante.setNombre(nombre);
    estudiante.setCarnet(carnet);
    estudiante.setCarrera(carrera);
    estudiante.setMateria(materia);
    estudiante.setPrecioLaboratorio(precioLab);

    estudiantes.push(estudiante);
    document.getElementById("carrera").disabled = true;
    document.getElementById("nombre").disabled = true;
    document.getElementById("carnet").disabled = true;
    mostrarTabla();
  } else {
    alert("Por favor, rellena todos los campos correctamente.");
  }
});

function mostrarTabla() {
  const info = document.getElementById('infoEstudiantes');
  info.innerHTML = '';

  let id = 1;
  estudiantes.forEach((estudiante, index) => {
    const row = `
      <tr>
        <td>${id++}</td>
        <td>${estudiante.nombre}</td>
        <td>${estudiante.carnet}</td>
        <td>${estudiante.carrera}</td>
        <td>${estudiante.materia}</td>
        <td>$${estudiante.precioLaboratorio}.00</td>
      </tr>
    `;
    infoEstudiantes.innerHTML += row;
  });
}

document.getElementById('terminar').addEventListener('click', function () {
  document.getElementById('nombre').disabled = true;
  document.getElementById('carnet').disabled = true;
  document.getElementById('carrera').disabled = true;
  document.getElementById('materiasSelect').disabled = true;
  document.getElementById('registrar').disabled = true;

  const matricula = 40;
  const biblioteca = 20;
  const servicios = 20;
  let totallaboratorio = 0;
  estudiantes.forEach((estudiante, index) => {
    totallaboratorio = totallaboratorio + estudiante.precioLaboratorio;
  });

  let resultados = document.getElementById('mostrar');
  resultados.innerHTML = '<h5>Total laboratorios: $' + totallaboratorio + '</h5>';
  resultados.innerHTML += '<h5>Matricula: $' + matricula + '</h5>';
  resultados.innerHTML += '<h5>Biblioteca: $' + biblioteca + '</h5>';
  resultados.innerHTML += '<h5>Servicios: $' + servicios + '</h5>';
  resultados.innerHTML += '<h5>TOTAL A PAGAR: $' + (matricula 
    + biblioteca + servicios + totallaboratorio) + '</h5>';
})
