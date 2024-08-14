function iniciar() {
  var btnarea = document.getElementById("area");
  var btnperim = document.getElementById("perimetro");

  if (btnarea.addEventListener) {
      btnarea.addEventListener("click", calculararea, false);
  } else if (btnarea.attachEvent) {
      btnarea.attachEvent("onclick", calculararea);
  }

  if (btnperim.addEventListener) {
      btnperim.addEventListener("click", calcularperimetro, false);
  } else if (btnperim.attachEvent) {
      btnperim.attachEvent("onclick", calcularperimetro);
  }
}

function calculararea() {
  var rect = new rectangulo(
      parseFloat(document.frmrectangulo.txtbase.value),
      parseFloat(document.frmrectangulo.txtaltura.value)
  );
  rect.mostrar(rect.carea(), ' área');
  return false;
}

function calcularperimetro() {
  var peri = new rectangulo(
      parseFloat(document.frmrectangulo.txtbase.value),
      parseFloat(document.frmrectangulo.txtaltura.value)
  );
  peri.mostrar(peri.cperimetro(), 'perímetro');
  return false;
}


function rectangulo(base, altura) { // Creando una clase/función constructora rectángulo
  this.base = base;    // Propiedades de la clase
  this.altura = altura;
  this.carea = function () {  // definidos usando el constructor Function()
      return this.base * this.altura;
  };

  this.cperimetro = function () {
      return 2 * this.base + 2 * this.altura;
  };

  this.mostrar = function (valor, tipoc) {
      var result = document.getElementById('resultado');
      result.innerHTML = '<hr><div class="alert alert-success" role="alert"> El ' + tipoc +
          ' es: ' + Math.round(valor * Math.pow(10, 2)) / Math.pow(10, 2) + '</div>';
  };
}

// Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
  window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", iniciar);
}