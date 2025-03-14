import { useState } from 'react';

const EstadisticasMusica = ({ artistas, albumes, canciones }) => {
    const [tipo_dato, ponerdato] = useState('albumes');

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full max-w-2xl">
                <div className="flex justify-center space-x-4">
                    <button
                        className={`px-4 py-2 rounded ${tipo_dato === 'artistas' ? 'bg-black text-white' : 'bg-gray-200'}`}
                        onClick={() => ponerdato('artistas')}
                    >
                        Artistas
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${tipo_dato === 'albumes' ? 'bg-black text-white' : 'bg-gray-200'}`}
                        onClick={() => ponerdato('albumes')}
                    >
                        Álbumes
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${tipo_dato === 'canciones' ? 'bg-black text-white' : 'bg-gray-200'}`}
                        onClick={() => ponerdato('canciones')}
                    >
                        Canciones
                    </button>
                </div>
            </div>

            {tipo_dato === 'artistas' && (
                <div className="flex flex-col items-center space-y-4">
                    {artistas.map((artista) => (
                        <div key={artista.id} className="flex max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden w-full">
                            <div className="w-1/3 p-4">
                                <img
                                    className="w-32 h-32 object-cover rounded-full"
                                    src={artista.img_art}
                                    alt={`foto de ${artista.nom_art}`}
                                />
                            </div>
                            <div className="w-2/3 p-4">
                                <h2 className="text-2xl font-bold mb-1 text-gray-800">
                                    {artista.nom_art}
                                </h2>
                                <p className="text-lg text-gray-600 mb-1">
                                    Oyentes: {artista.oyentes_art.toLocaleString()}
                                </p>
                                <p className="text-lg text-gray-600 mb-1">
                                    Nacionalidad: {artista.nacionalidad_art}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {tipo_dato === 'albumes' && (
                <div className="flex flex-col items-center space-y-4">
                    {albumes.map((album) => (
                        <div key={album.id} className="flex max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden w-full">
                            <img
                                className="w-1/3 h-full object-cover"
                                src={album.imagen}
                                alt={album.nom_album}
                            />
                            <div className="w-2/3 p-4">
                                <h2 className="text-lg font-bold mb-1 text-gray-800">
                                    {album.nom_album}
                                </h2>
                                <p className="text-sm text-gray-600 mb-1">
                                    Artista: {album.nom_art}
                                </p>
                                <p className="text-sm text-gray-600 mb-1">
                                    Fecha de publicación: {album.fecha_publicacion}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {tipo_dato === 'canciones' && (
                <div className="flex flex-col items-center space-y-4">
                    {canciones.map((cancion) => (
                        <div key={cancion.id} className="flex max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden w-full">
                            <img
                                className="w-1/3 h-full object-cover"
                                src={cancion.img_album}
                                alt={cancion.nom_album}
                            />
                            <div className="w-2/3 p-4">
                                <h2 className="text-lg font-bold mb-1 text-gray-800">
                                    {cancion.nom_cancion}
                                </h2>
                                <p className="text-sm text-gray-600 mb-1">
                                    Reproducciones: {cancion.reproducciones.toLocaleString()}
                                </p>
                                <p className="text-sm text-gray-600 mb-1">
                                    Álbum: {cancion.nom_album}
                                </p>
                                <p className="text-sm text-gray-600 mb-1">
                                    Artista: {cancion.nom_art}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EstadisticasMusica;