// funciones que verifican los datos ingresados por el usuario
// y que se encargan de mostrar los mensajes de error


//funcion que verifica si la contraseña ingresada es valida

function ContraseñaValida(contrasena) {

    const numeros = "0123456789";
    const minusc = "abcdefghijklmnopqrstuvwxyz";
    const mayusc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const caracteres = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const longitud = 9;

    let contraseña_numeros = false;
    let contraseña_minusc = false;
    let contraseña_mayusc = false;
    let contraseña_caracteres = false;

    //verifica si la contraseña tiene al menos un numero
    for (let i = 0; i < contrasena.length; i++) {

        if (numeros.indexOf(contrasena.charAt(i)) != -1) {
            contraseña_numeros = true;
        }
    }

    //verifica si la contraseña tiene al menos una letra minuscula
    for (let i = 0; i < contraseña_caracteres.length; i++) {


        if (minusc.indexOf(contrasena.charAt(i)) != -1) {

            contraseña_minusc = true;
        }

    }
    //verifica si la contraseña tiene al menos una letra mayuscula
    for (let i = 0; i < contrasena.length; i++) {

        if (mayusc.indexOf(contrasena.charAt(i)) != -1) {

            contraseña_minusc = true;

        }
    }
    //verifica si la contraseña tiene al menos un caracter especial

    for (let i = 0; i < contrasena.length; i++) {
        if (caracteres.indexOf(contrasena.charAt(i)) != -1) {

            caracteres = true;

        }
    }

    //verifica si la contraseña tiene la longitud adecuada
    if (contrasena.length >= longitud) {

        longitud = true;
    }
    //verifica si la contraseña cumple todos los requisitos
    if (contraseña_numeros && contraseña_minusc && contraseña_mayusc && contraseña_caracteres && longitud) {

        return true;

    }
    else {
        return false;
    }
}
export default ContraseñaValida;