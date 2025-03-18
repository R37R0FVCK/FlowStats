import React, { useState } from 'react';
import BotonCerrarAnimado from "../../../BotonCerrarAnimado.jsx";

const TarjetaInfoAlbum = ({ album, onClose }) => {
    // Estado para controlar si se muestra el tracklist
    const [mostrar_tracklistal, mostrar_tracklist] = useState(false);

    // Función para alternar la visibilidad del tracklist
    const Tracklist = () => {
        mostrar_tracklist(!mostrar_tracklistal);
    };

    // Función para dividir el tracklist en columnas
    const repartircanciones = (tracklist, cancionespornumcol) => {
        const numerocolumnas = [];
        for (let i = 0; i < tracklist.length; i += cancionespornumcol) {
            numerocolumnas.push(tracklist.slice(i, i + cancionespornumcol));
        }
        return numerocolumnas;
    };

    // Dividir el tracklist en columnas de 5 canciones
    const columnasTracklist = repartircanciones(album.tracklist, 5);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 z-50">
            <div className={`relative w-11/12 ${mostrar_tracklistal ? 'max-w-6xl' : 'max-w-lg'} h-3/4 bg-black bg-opacity-50 rounded-lg overflow-hidden shadow-lg`}>
                <div className="absolute inset-0">
                    <img
                        src={album.imagen_album}
                        alt={album.nombre_album}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0"></div>
                </div>
                <div className="relative z-10 p-6 flex flex-col items-center justify-center h-full">
                    {/* Botón para cerrar el modal */}
                    <button
                        className="absolute top-2 right-2 rounded-full p-2"
                        onClick={onClose}
                    >
                        <BotonCerrarAnimado />
                    </button>
                    <div className="bg-black/50 p-4 rounded-lg w-full h-full overflow-y-auto">
                        {/* Mostrar información del álbum o el tracklist */}
                        {!mostrar_tracklistal ? (
                            <>
                                <h2 className="text-4xl text-center font-bold text-white mb-4">{album.nombre_album}</h2>
                                <p className="text-xl text-white"><strong>Artista:</strong> {album.nombre_artista}</p>
                                <p className="text-xl text-white"><strong>Fecha de lanzamiento:</strong> {new Date(album.fecha_lanzamiento).toLocaleDateString("es-ES")}</p>
                                <p className="text-xl text-white"><strong>Número de Canciones:</strong> {album.numero_canciones}</p>
                                <p className="text-xl text-white"><strong>Duración:</strong> {album.duracion}</p>
                            </>
                        ) : (
                            <div className="mt-4 text-white w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {columnasTracklist.map((columna, colIndex) => (
                                    <ul key={colIndex} className="list-inside">
                                        {columna.map((cancion, index) => (
                                            <li key={index} className="mb-2">
                                                <span className="font-bold text-2xl">{index + 1 + colIndex * 5}.</span> {cancion}
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        )}
                        {/* Botón para alternar entre mostrar/ocultar el tracklist */}
                        <div className="flex justify-center mt-4">
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                onClick={Tracklist}
                            >
                                {mostrar_tracklistal ? 'Ocultar Tracklist' : 'Ver Tracklist'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TarjetaInfoAlbum;