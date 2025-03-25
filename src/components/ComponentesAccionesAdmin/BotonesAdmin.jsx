//Codigo incompleto a la espera de añadir mas funcionalidades en la proxima fase
const BotonesAdmin = () => {
    // Función para redirigir al usuario a una página específica
    const redirigirapagina = (url) => {
        window.location.href = url; // Redirige al cliente a la URL proporcionada
    };

    return (
        <div className="flex flex-col ml-60 items-center justify-center h-full py-10 bg-gray-100">
            {/* Título principal de la sección */}
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
                Acciones de Administrador
            </h1>

            {/* Contenedor de los botones de acción */}
            <div className="flex space-x-6">
                {/* Botón para consultar datos internos */}
                <button
                    onClick={() =>
                        redirigirapagina(
                            "/Admin/Accionesadmin/ConsultarDatosInternos"
                        )
                    }
                    className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-orange-400 hover:text-black transition duration-300"
                >
                    Consultar Datos Internos
                </button>

                {/* Botón para realizar acciones sobre usuarios */}
                <button
                    onClick={() =>
                        redirigirapagina("/Admin/Accionesadmin/OpcionesUsuario/AccionesUsuario/Acciones")
                    }
                    className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-orange-400 hover:text-black transition duration-300"
                >
                    Acciones sobre Usuarios
                </button>

                {/* Botón para administrar datos */}
                <button
                    onClick={() =>
                        redirigirapagina("/Admin/Accionesadmin/AdministrarDatos")
                    }
                    className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-orange-400 hover:text-black transition duration-300"
                >
                    Administrar Datos
                </button>
            </div>
        </div>
    );
};

export default BotonesAdmin;