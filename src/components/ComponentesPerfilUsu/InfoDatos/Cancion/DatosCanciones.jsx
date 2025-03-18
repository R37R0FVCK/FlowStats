import React, { useState } from 'react';
import TarjetaInfoCancion from './TarjetaInfoCancion.jsx'; // Componente para mostrar la información detallada de una canción

const DatosCanciones = ({ canciones_gustadas }) => {
    // Estado para almacenar la canción seleccionada
    const [cancionSeleccionada, setCancionSeleccionada] = useState(null);

    // Función para abrir el modal con la información de la canción seleccionada
    const abrirModalCancion = (cancion) => {
        setCancionSeleccionada(cancion);
    };

    // Función para cerrar el modal de la canción
    const cerrarModalCancion = () => {
        setCancionSeleccionada(null);
    };

    return (
        <div>
            {/* Lista de canciones gustadas */}
            <ul className="flex flex-col items-center">
                {canciones_gustadas.map((cancion) => (
                    <li
                        key={cancion.id_cancion} // Clave única para cada canción
                        className="mb-1 flex items-center space-x-2 group"
                        onClick={() => abrirModalCancion(cancion)} // Abre el modal al hacer clic
                    >
                        {/* Imagen de la canción con efecto hover */}
                        <div className="relative cursor cursor-pointer flex-shrink-0">
                            <img
                                src={cancion.imagen_cancion} // URL de la imagen de la canción
                                alt={cancion.titulo_cancion} // Texto alternativo para la imagen
                                className="h-25 w-25 object-cover rounded-lg" // Imagen con bordes redondeados
                            />
                            {/* Efecto de superposición al pasar el cursor */}
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg" />
                            {/* Título de la canción visible al pasar el cursor */}
                            <span className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100">
                                {cancion.titulo_cancion}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Mostrar el modal con la información de la canción seleccionada */}
            {cancionSeleccionada && (
                <TarjetaInfoCancion
                    cancion={cancionSeleccionada} // Pasar la canción seleccionada como prop
                    onClose={cerrarModalCancion} // Función para cerrar el modal
                />
            )}
        </div>
    );
};

export default DatosCanciones;