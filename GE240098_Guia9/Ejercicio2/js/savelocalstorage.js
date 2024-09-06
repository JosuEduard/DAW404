//Verificar si el navegador utilizado posee soporte para usar localStorage
//Si no lo es advertir al usuario enviando una advertencia de no compatibilidad.
if (typeof (localStorage) == 'undefined') {
  document.getElementById('notCompatibleMsg').style.display = 'block';
}
else{
  document.getElementById('isCompatibleMsg').style.display = 'block';
}

let storedTextContainer = document.getElementById('webStorageStoredText');
let storedText = localStorage.getItem('webStorageTestInput');
let inputBox = document.getElementById("webStorageInput");
let saveBtn = document.getElementById("webStorageSaveBtn");
let clearBtn = document.getElementById("clearWebStorage");

//Verificar si el dato en el objeto es nulo
if (storedText != null) {
  storedTextContainer.innerHTML  =  "<strong>Dato  cargado  desde  almacenamiento local:</strong>" + storedText;
  inputBox.value = storedText;
}
saveBtn.onclick = function () {
  let valueToSave = inputBox.value.replace(/<\/?[^>]+>/gi, '');
  localStorage.setItem('webStorageTestInput', valueToSave);
  storedTextContainer.innerHTML = "Se ha almacenado correctamente '" + valueToSave + ".' Actualice la página para que observe que el dato almacenado es mostrado en el campo de formulario.";
}
clearBtn.onclick = function () {
  //Verificamos que exista un dato almacenado en LocalStorage
  if (storedText != null) {
    localStorage.clear();
    //Limpiar la caja 
    inputBox.value = "";
    storedTextContainer.innerHTML = 'Almacenamiento local liberado';
  }
}