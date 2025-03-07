import React from "react";

function borrarCookie(nombre) {
    document.cookie = `${nombre}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax;`;
}

function cerrarSesion() {
    // Eliminar las cookies de autenticación
    borrarCookie("auth");
    borrarCookie("username");

    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "/";
}

const NavCuenta = () => {
    return (
        <nav className="bg-orange-500 border-r-4 border-black p-4 space-y-4 h-full w-40">
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded w-full"
                onClick={() => (window.location.href = "/pagina1")}
            >
                Informacion general
            </button>
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded w-full"
                onClick={() => (window.location.href = "/pagina2")}
            >
                Página 2
            </button>
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded w-full"
                onClick={() => (window.location.href = "/pagina3")}
            >
                Modificar Datos
            </button>
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded w-full"
                onClick={cerrarSesion}
            >
                Cerrar Cuenta
            </button>
        </nav>
    );
};

export default NavCuenta;