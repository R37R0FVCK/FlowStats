import React, { useState } from 'react';
import TarjetaArtista from './TarjetaInfoArtista.jsx';

const DatosArtistas = ({ artistas_gustados }) => {
    const [artistaSeleccionado, setArtistaSeleccionado] = useState(null);

    const abrirTarjetaArtista = (artista) => {
        setArtistaSeleccionado(artista);
    };

    const cerrarTarjetaArtista = () => {
        setArtistaSeleccionado(null);
    };

    return (
        <div>
            <ul className="flex flex-col items-center">
                {artistas_gustados.map((artista) => (
                    <li
                        key={artista.id_artista}
                        className="mb-1 flex items-center space-x-2 group"
                        onClick={() => abrirTarjetaArtista(artista)}
                    >
                        <div className="relative flex-shrink-0">
                            <img
                                src={artista.imagen_artista}
                                alt={artista.nombre_artista}
                                className="h-25 w-25 object-cover rounded-full"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-full" />
                            <span className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100">
                                {artista.nombre_artista}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            {artistaSeleccionado && (
                <TarjetaArtista
                    artista={artistaSeleccionado}
                    onClose={cerrarTarjetaArtista}
                />
            )}
        </div>
    );
};

export default DatosArtistas;