import React, { useState } from 'react';
import BotonLikeCanciones from './LikesPrincipal/BotonLikeCanciones';
import BotonLikeArtistas from './LikesPrincipal/BotonLikeArtistas';
import BotonLikeAlbumes from './LikesPrincipal/BotonLikesAlbumes';

const BotonEstadisticasPrincipales = ({ artistas_registrados, albumes, ElegirArtistas, haentradoencuenta, usuarioId, cancionesLiked, artistasLiked }) => {
    const [tipoDato, setTipoDato] = useState('albumes');

    const cambiarTipoDato = (nuevoTipo) => {
        setTipoDato(nuevoTipo);
    };

    const isLiked = (id) => {
        return cancionesLiked.some(cancion => cancion.cod_cancion === id);
    };

    const isArtistLiked = (id) => {
        return artistasLiked.some(artista => artista.cod_art === id);
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center space-x-4">
                <button
                    className={`px-4 py-2 rounded ${tipoDato === 'artistas' ? 'bg-black text-white' : 'bg-gray-200'}`}
                    onClick={() => cambiarTipoDato('artistas')}
                >
                    Artistas
                </button>
                <button
                    className={`px-4 py-2 rounded ${tipoDato === 'albumes' ? 'bg-black text-white' : 'bg-gray-200'}`}
                    onClick={() => cambiarTipoDato('albumes')}
                >
                    Álbumes
                </button>
                <button
                    className={`px-4 py-2 rounded ${tipoDato === 'canciones' ? 'bg-black text-white' : 'bg-gray-200'}`}
                    onClick={() => cambiarTipoDato('canciones')}
                >
                    Canciones
                </button>
            </div>

            {tipoDato === 'artistas' && (
                <div className="flex flex-col items-center space-y-4">
                    {artistas_registrados.map((artista) => (
                        <div key={artista.nom_art} className="flex max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden w-full">
                            <div className="w-1/3 p-4">
                                <img className="w-32 h-32 object-cover rounded-full" src={artista.img_art} alt={`foto de ${artista.nom_art}`} />
                            </div>
                            <div className="w-2/3 p-4 flex justify-between items-center">
                                <div>
                                    <h2 className="text-2xl font-bold mb-1 text-gray-800">{artista.nom_art}</h2>
                                    <p className="text-lg text-gray-600 mb-1">Oyentes: {artista.oyentes_art.toLocaleString()}</p>
                                    <p className="text-lg text-gray-600 mb-1">Nacionalidad: {artista.nacionalidad_art}</p>
                                </div>
                                {haentradoencuenta && <BotonLikeArtistas artistaId={artista.cod_art} usuarioId={usuarioId} isLiked={isArtistLiked} />}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {tipoDato === 'albumes' && (
                <div className="flex flex-col items-center space-y-4">
                    {albumes.map((album) => (
                        <div key={album.id} className="flex max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden w-full">
                            <img className="w-1/3 h-full object-cover" src={album.imagen} alt={album.nom_album} />
                            <div className="w-2/3 p-4 flex justify-between items-center">
                                <div>
                                    <h2 className="text-lg font-bold mb-1 text-gray-800">{album.nom_album}</h2>
                                    <p className="text-sm text-gray-600 mb-1">Artista: {album.nom_art}</p>
                                    <p className="text-sm text-gray-600 mb-1">Fecha de publicación: {album.fecha_publicacion}</p>
                                </div>
                                {haentradoencuenta && <BotonLikeAlbumes albumId={album.id} usuarioId={usuarioId} isLiked={isLiked} />}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {tipoDato === 'canciones' && (
                <div className="flex flex-col items-center space-y-4">
                    {ElegirArtistas.map((cancion) => (
                        <div key={cancion.id} className="flex max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden w-full">
                            <div className="w-1/3 p-4">
                                <img className="w-full h-full object-cover" src={cancion.img_album} alt={cancion.nom_album} />
                            </div>
                            <div className="w-2/3 p-4 flex justify-between items-center">
                                <div>
                                    <h2 className="text-lg font-bold mb-1 text-gray-800">{cancion.nom_cancion}</h2>
                                    <p className="text-sm text-gray-600 mb-1">Reproducciones: {cancion.reproducciones.toLocaleString()}</p>
                                </div>
                                {haentradoencuenta && <BotonLikeCanciones cancionId={cancion.id} usuarioId={usuarioId} isLiked={isLiked} />}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BotonEstadisticasPrincipales;