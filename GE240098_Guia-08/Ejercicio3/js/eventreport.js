function report(element, event) {
  if ((element.type == "select-one") || (element.type == "select-multiple")) {
    value = "";
    for (var i = 0; i < element.options.length; i++) {
      if (element.options[i].selected) {
        value += element.options[i].value + " ";
      }
    }
  }
  else if (element.type == "textarea") value = "...";
  else value = element.value;
  var msg = event + ": " + element.name + " (" + value + ")\n"; var t = element.form.textarea;
  t.value += msg;
}
function addHandlers(f) {
  //Recorrer con un lazo todos los controles del formulario 
  for (var i = 0; i < f.elements.length; i++) {
    var e = f.elements[i];
    e.onclick = function  () { report(this, 'Click'); }
    e.onchange = function () { report(this, 'Change'); }
    e.onfocus = function () { report(this, 'Focus'); }
    e.onblur = function () { report(this, 'Blur'); }
    e.onselect = function () { report(this, 'Select') }
  }
  
  //Definir algún controlador de evento especial para tres botones 

  f.clearbutton.onclick = function () {
    this.form.textarea.value = "";
    report(this, 'Click');
  }
  f.submitbutton.onclick = function () {
    report(this, 'Click');
    return false;
  }
  f.resetbutton.onclick = function () {
    this.form.reset();
    report(this, 'Click');
    return false;
  }
}
//Activar el formulario añadiendo todos los controladores de eventos
addHandlers(document.everything);