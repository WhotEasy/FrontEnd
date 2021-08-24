function validar(formulario) {
    //Expresion regular del correo
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!re.test(formulario.email.value)) {
        var elemento = document.getElementById('errorEmail');
        elemento.innerHTML = "Email inválido";
        return false;
    }
    if (formulario.contrasena.value.length < 8) {
        var elemento = document.getElementById('errorContrasena');
        elemento.innerHTML = "Contraseña inválida, mínimo 8 caracteres ";
        return false;
    }

    return true;
}