import React, { useState } from 'react';
import TarjetaInfoAlbum from './TarjetaInfoAlbum.jsx';

const DatosAlbumes = ({ albumes_gustados }) => {
    const [Ver_info_Album, asignarAlbum] = useState(null);

    const abrirTarjetaAlbum = (album) => {
        asignarAlbum(album);
    };

    const cerrarTarjetaAlbum = () => {
        asignarAlbum(null);
    };

    return (
        <div>
            <ul className="flex flex-col items-center">
                {albumes_gustados.map((album) => (
                    <li
                        key={album.id_album}
                        className="mb-1 flex items-center space-x-2 group"
                        onClick={() => abrirTarjetaAlbum(album)}
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

            {Ver_info_Album && (
                <TarjetaInfoAlbum
                    album={Ver_info_Album}
                    onClose={cerrarTarjetaAlbum}
                />
            )}
        </div>
    );
};

export default DatosAlbumes;