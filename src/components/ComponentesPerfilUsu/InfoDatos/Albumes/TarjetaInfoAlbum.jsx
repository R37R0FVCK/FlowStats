import React from 'react';
import BotonCerrarAnimado from "../../../BotonCerrarAnimado.jsx";

const TarjetaInfoAlbum = ({ album, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 z-50">
            <div className="relative w-11/12 max-w-lg h-3/4 bg-black bg-opacity-50 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0">
                    <img
                        src={album.imagen_album}
                        alt={album.nombre_album}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 "></div>
                </div>
                <div className="relative z-10 p-6 flex flex-col items-center justify-center h-full">
                    <button
                        className="absolute top-2 right-2 rounded-full p-2"
                        onClick={onClose}
                    >
                        <BotonCerrarAnimado />
                    </button>
                    <div className="bg-black/50 p-4 rounded-lg">
                        <h2 className="text-4xl text-center font-bold text-white mb-4">{album.nombre_album}</h2>
                        <p className="text-xl text-white"><strong>Artista:</strong> {album.nombre_artista}</p>
                        <p className="text-xl text-white"><strong>Fecha de lanzamiento:</strong> {new Date(album.fecha_lanzamiento).toLocaleDateString("es-ES")}</p>
                        <p className="text-xl text-white"><strong>Número de Canciones:</strong> {album.numero_canciones}</p>
                        <p className="text-xl text-white"><strong>Duracion:</strong> {album.duracion}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TarjetaInfoAlbum;