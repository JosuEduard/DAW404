let boton = document.getElementById("botonContacto");

boton.addEventListener('click', validarEntrada)

function validarEntrada(){
    let nombre = document.getElementById("Nombre").value.trim();
    let email = document.getElementById("Email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    let confirmacion = document.getElementById("confirmacion");
    let name = /^[a-zA-Z]+$/;
    let correo = /\w+@\w+\.com$/;

    if (nombre === "" || email === "" || mensaje === "") {
        document.getElementById("confirmacion").classList.add('text-danger');
        confirmacion.innerText = "¡Llene correctamente el formulario!";
        return;

    } else if(!name.test(nombre)){           
        document.getElementById("confirmacion").classList.add('text-danger');
        confirmacion.innerText = "¡Un nombre solo puede llevar letras del abecedario!";
        return;

    } else if(!correo.test(email)){
        document.getElementById("confirmacion").classList.add('text-danger');
        confirmacion.innerText = "¡El formato del correo es incorrecta!";
        return;
    } else {
        document.getElementById("Nombre").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("mensaje").value = "";
        document.getElementById("confirmacion").classList.remove('text-danger');
        document.getElementById("confirmacion").classList.add('text-success');
        confirmacion.innerText = "!El formulario se envió exitosamente!";
    }


}