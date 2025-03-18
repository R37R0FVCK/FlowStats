import React, { useState } from 'react';
import TarjetaInfoAlbum from './TarjetaInfoAlbum.jsx'; // Componente para mostrar la información detallada de un álbum

const DatosAlbumes = ({ albumes_gustados }) => {
    // Estado para almacenar el álbum seleccionado
    const [Ver_info_Album, asignarAlbum] = useState(null);

    // Función para abrir la tarjeta con la información del álbum seleccionado
    const abrirtarjeta = (album) => {
        asignarAlbum(album);
    };

    // Función para cerrar la tarjeta de información del álbum
    const cerrartarjeta = () => {
        asignarAlbum(null);
    };

    return (
        <div>
            {/* Lista de álbumes gustados */}
            <ul className="flex flex-col items-center">
                {albumes_gustados.map((album) => (
                    <li
                        key={album.id_album}
                        className="mb-1 flex items-center space-x-2 group"
                        onClick={() => abrirtarjeta(album)}
                    >
                        <div className="relative cursor-pointer flex-shrink-0">
                            <img
                                src={album.imagen_album}
                                alt={album.nombre_album}
                                className="h-25 w-25 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg" />

                            <span className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100">
                                {album.nombre_album}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Mostrar la tarjeta de información del álbum seleccionado */}
            {Ver_info_Album && (
                <TarjetaInfoAlbum
                    album={Ver_info_Album} // Pasar el álbum seleccionado como prop
                    onClose={cerrartarjeta} // Función para cerrar la tarjeta
                />
            )}
        </div>
    );
};

export default DatosAlbumes;