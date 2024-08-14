class Book {
  constructor() {
    this.autor = "";
    this.titulo = "";
    this.editorial = "";
    this.edicion = "";
    this.pais = "";
  }

  setAutor(autor) {
    this.autor = autor;
  }

  getAutor() {
    return this.autor;
  }

  setTitulo(titulo) {
    this.titulo = titulo;
  }

  getTitulo() {
    return this.titulo;
  }

  setEditorial(editorial) {
    this.editorial = editorial;
  }

  getEditorial() {
    return this.editorial;
  }

  setEdicion(edicion) {
    this.edicion = edicion;
  }

  getEdicion() {
    return this.edicion;
  }

  setPais(pais) {
    this.pais = pais;
  }

  getPais() {
    return this.pais;
  }
}

// Registrar evento click del ratón al presionar botones de envío
function iniciar() {
  var showinfo = document.getElementById("mostrar");
  if (showinfo.addEventListener) {
    showinfo.addEventListener("click", function () {
      createObject(document.frmbook);
    }, false);
  } else if (showinfo.attachEvent) {
    showinfo.attachEvent("onclick", function () {
      createObject(document.frmbook);
    });
  }
}

// Creando el nuevo objeto
function createObject(form) {
  const book = new Book(); // Generando la instancia de Book
  book.setAutor(form.txtautor.value);
  book.setTitulo(form.txttitulo.value); // Cargando el objeto
  book.setEditorial(form.seleditorial.options[form.seleditorial.selectedIndex].text);
  book.setEdicion(form.seledicion.options[form.seledicion.selectedIndex].text);
  book.setPais(form.txtpais.value);
  showProperties(book, "InfoBook");
}

const arrayObjetos = []; // Arreglo en el que se guardarán todos los objetos creados


function showProperties(objeto, objName) {
  var infBook = "";
  var tblBook = "";
  var info = document.getElementById('infolibro'); // Espacio donde se pintarán los objetos

  for (var i in objeto) {
    infBook = infBook + objName + "." + i + " = " + objeto[i] + "\n";
  }

  if (!confirm(infBook + "\n\n¿Es esta información correcta?")) {
    frmbook.txtautor.value = "";
    frmbook.txttitulo.value = "";
    frmbook.seleditorial.value = "";
    frmbook.seledicion.value = "";
    frmbook.txtpais.value = "";
  } else {
    arrayObjetos.push(objeto); // Agregamos los objetos al arreglo
  }

  let id = 1; // Se pintará en la tabla como el identificador
  let posicion = 0; // Servirá para definir la posición a los objetos

  arrayObjetos.forEach(element => {
    tblBook += "\t<tr>\n";
    tblBook += "\t\t<td>" + id++ + "</td>\n";
    tblBook += "\t\t<td>" + element.getTitulo() + "</td>\n";
    tblBook += "\t\t<td>" + element.getAutor() + "</td>\n";
    tblBook += "\t\t<td>" + element.getEditorial() + "</td>\n";
    tblBook += "\t\t<td>" + element.getEdicion() + "</td>\n";
    tblBook += "\t\t<td>" + element.getPais() + "</td>\n";
    tblBook += "\t\t<td><button onclick='eliminar(" + posicion++ + ")' class='btn btn-danger'>Eliminar</button></td>\n";
    tblBook += "\t</tr>\n";
  });

  info.innerHTML = tblBook;
}

function eliminar(valor) { // Función para eliminar los elementos del arreglo
  var confirmacion = confirm("¿Está seguro de eliminar este registro id = " + valor + "?");
  if (confirmacion) {
    arrayObjetos.splice(parseInt(valor), 1); // Eliminamos un elemento desde la posición dada
    var tblBook = "";
    var info = document.getElementById('infolibro');
    let id = 1;
    let posicion = 0;
    arrayObjetos.forEach(element => { // Se vuelve a pintar la tabla para ver el resultado
      tblBook += "\t<tr>\n";
      tblBook += "\t\t<td>" + id++ + "</td>\n";
      tblBook += "\t\t<td>" + element.getTitulo() + "</td>\n";
      tblBook += "\t\t<td>" + element.getAutor() + "</td>\n";
      tblBook += "\t\t<td>" + element.getEditorial() + "</td>\n";
      tblBook += "\t\t<td>" + element.getEdicion() + "</td>\n";
      tblBook += "\t\t<td>" + element.getPais() + "</td>\n";
      tblBook += "\t\t<td><button onclick='eliminar(" + posicion++ + ")' class='btn btn-danger'>Eliminar</button></td>\n";
      tblBook += "\t</tr>\n";
    });

    info.innerHTML = tblBook;
  }
}

// Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
  window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", iniciar);
}