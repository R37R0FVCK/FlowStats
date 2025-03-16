import React, { useState } from 'react';
import TarjetaInfoCancion from './TarjetaInfoCancion.jsx';

const DatosCanciones = ({ canciones_gustadas }) => {
    const [cancionSeleccionada, setCancionSeleccionada] = useState(null);

    const abrirModalCancion = (cancion) => {
        setCancionSeleccionada(cancion);
    };

    const cerrarModalCancion = () => {
        setCancionSeleccionada(null);
    };

    return (
        <div>
            <ul className="flex flex-col items-center">
                {canciones_gustadas.map((cancion) => (
                    <li
                        key={cancion.id_cancion}
                        className="mb-1 flex items-center space-x-2 group"
                        onClick={() => abrirModalCancion(cancion)}
                    >
                        <div className="relative flex-shrink-0">
                            <img
                                src={cancion.imagen_cancion}
                                alt={cancion.titulo_cancion}
                                className="h-25 w-25 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg" />
                            <span className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100">
                                {cancion.titulo_cancion}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            {cancionSeleccionada && (
                <TarjetaInfoCancion
                    cancion={cancionSeleccionada}
                    onClose={cerrarModalCancion}
                />
            )}
        </div>
    );
};

export default DatosCanciones;