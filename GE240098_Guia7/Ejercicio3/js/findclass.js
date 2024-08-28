function iniciar() {
  var classname, tag = "";
  var btnfind = document.getElementById("btnSend");
  if (btnfind.addEventListener) {
    btnfind.addEventListener("click", function () {
      classname = document.frmclass.txtname.value;
      tag = document.frmclass.selelement[document.frmclass.selelement.selectedIndex].value;
      alert("Se han encontrado " + findClassInElements(classname, tag) + " elementos " + tag.toString() + " con la clase " + classname);
    }, false);
  }
  else if (btnfind.attachEvent) {
    btnfind.attachEvent("onclick", function () {
      classname = document.frmclass.txtname.value;
      tag = document.frmclass.selelement[document.frmclass.selelement.selectedIndex].value;
      alert("Se han encontrado " + findClassInElements(classname, tag) + " elementos " + tag.toString() + " con la clase " + classname);
    });
  }
}
function findClassInElements(className, type) {
  var elems = document.getElementsByTagName(type || "*");
  var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
  var results = new Array();
  for (var i = 0, length = elems.length; i < length; i++) {
    if (regex.test(elems[i].className)) {
      results.push(elems[i]);
    }
  }
  return results.length;
}

if(window.addEventListener){
window.addEventListener("load", iniciar, false); }
  else if (window.attachEvent) {
  window.attachEvent("onload", iniciar);
}