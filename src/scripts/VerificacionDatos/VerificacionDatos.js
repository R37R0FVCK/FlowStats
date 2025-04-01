function Contraseña_valida(contraseña_ingresar) {
    const numeros = "0123456789";
    const minusc = "abcdefghijklmnopqrstuvwxyz";
    const mayusc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const caracteres = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const longitud_min = 9;

    let errores_validacion = [];

    // Verificar si la contraseña tiene al menos un número
    if (!contraseña_ingresar.split("").some((car_pal) => numeros.includes(car_pal))) {
        errores_validacion.push("La contraseña debe tener al menos un número.");
    }

    // Verificar si la contraseña tiene al menos una letra minúscula
    if (!contraseña_ingresar.split("").some((car_pal) => minusc.includes(car_pal))) {
        errores_validacion.push("La contraseña debe tener al menos una letra minúscula.");
    }

    // Verificar si la contraseña tiene al menos una letra mayúscula
    if (!contraseña_ingresar.split("").some((car_pal) => mayusc.includes(car_pal))) {
        errores_validacion.push("La contraseña debe tener al menos una letra mayúscula.");
    }

    // Verificar si la contraseña tiene al menos un carácter especial
    if (!contraseña_ingresar.split("").some((car_pal) => caracteres.includes(car_pal))) {
        errores_validacion.push("La contraseña debe tener al menos un carácter especial.");
    }

    // Verificar si la contraseña tiene la longitud mínima
    if (contraseña_ingresar.length < longitud_min) {
        errores_validacion.push(`La contraseña debe tener al menos ${longitud_min} caracteres.`);
    }

    return errores_validacion;
}

export { Contraseña_valida };

function mayor_16(fecha_nacimiento) {
    const fecha_lim = new Date();
    fecha_lim.setFullYear(fecha_lim.getFullYear() - 16);

    const fecha_nac = new Date(fecha_nacimiento);

    // Verificar si la fecha ingresada es válida
    if (isNaN(fecha_nac.getTime())) {
        return false; // Fecha inválida
    }

    // Comparar la fecha ingresada con la fecha límite
    return fecha_nac <= fecha_lim;
}

export { mayor_16 };

function fecha_valida_concierto(fecha_concierto) {
    const fecha_actual = new Date();
    const fecha_con = new Date(fecha_concierto);

    // Verificar si la fecha ingresada es válida
    if (isNaN(fecha_con.getTime())) {
        return false; // Fecha inválida
    }

    // Comparar la fecha actual con la fecha ingresada
    return fecha_actual > fecha_con;
}

export { fecha_valida_concierto };


function numero_telf_valido(num_telf) {
    const num_car = /^[0-9]{9}$/; // Acepta solo números con exactamente 9 dígitos

    // Verificar si el número de teléfono cumple con el formato
    return num_car.test(num_telf); // Devuelve true si es válido, false si no lo es
}

export { numero_telf_valido };