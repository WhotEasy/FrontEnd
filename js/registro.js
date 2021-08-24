function validar(formulario) {
    //Expresion regular del correo
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!re.test(formulario.email.value)) {
        var elemento = document.getElementById('errorEmail');
        elemento.innerHTML = "Email inválido";
        return false;
    }
    if (formulario.contrasena.value < 8) {
        var elemento = document.getElementById('errorContrasena');
        elemento.innerHTML = "Contraseña inválida, mínimo 8 caracteres ";
        return false;
    }

    if (formulario.contrasena.value != formulario.confirmacion.value) {
        var elemento = document.getElementById('errorConfirmacion');
        elemento.innerHTML = "Confirmación no coincide con la contraseña ";
        return false;
    }

    if (formulario.GeneroMusical.value == -1) {
        var elemento = document.getElementById('errorGeneroMusical');
        elemento.innerHTML = "Debe seleccionar un género";
        return false;
    }
    if (formulario.Edad.value == "") {
        var elemento = document.getElementById('errorEdad');
        elemento.innerHTML = "Debe seleccionar un rango de edad";
        return false;
    }
    if (!formulario.terminos.checked) {
        var elemento = document.getElementById('errorTerminos');
        elemento.innerHTML = "Debe aceptar los términos";
        return false;
    }
    alert("Registro exitoso");
    return true;

}