import { useState, useEffect } from 'react';
import BotonLikeCanciones from './LikesPrincipal/BotonLikeCanciones';
import BotonLikeArtistas from './LikesPrincipal/BotonLikeArtistas';
import BotonLikeAlbumes from './LikesPrincipal/BotonLikesAlbumes';

const BotonEstadisticasPrincipales = ({ artistas_registrados, albumes, ElegirArtistas, haentradoencuenta, usuarioId, canciones_gustadas, artistas_gustados, albumes_gustados }) => {
    // Estado para controlar el tipo de datos que se muestra (artistas, álbumes o canciones)
    const [tipoDato, setTipoDato] = useState('albumes');

    // Estados para almacenar los elementos marcados como like
    const [artistas_con_like, setArtistasConLike] = useState(artistas_gustados);
    const [albumes_con_like, setAlbumesConLike] = useState(albumes_gustados);
    const [canciones_con_like, setCancionesConLike] = useState(canciones_gustadas);

    // Actualizar el estado de artistas con like cuando cambien los datos
    useEffect(() => {
        setArtistasConLike(artistas_gustados);
    }, [artistas_gustados]);

    // Actualizar el estado de álbumes con like cuando cambien los datos
    useEffect(() => {
        setAlbumesConLike(albumes_gustados);
    }, [albumes_gustados]);

    // Actualizar el estado de canciones con like cuando cambien los datos
    useEffect(() => {
        setCancionesConLike(canciones_gustadas);
    }, [canciones_gustadas]);

    // Función para cambiar el tipo de datos que se muestra
    const cambiarTipoDato = (tipo_dato) => {
        setTipoDato(tipo_dato);
    };

    // Función para verificar si una canción está marcada como like
    const asignar_like_cancion = (id_cancion) => {
        const buscar_cancion = canciones_con_like.some(cancion => cancion.cod_cancion === id_cancion);
        return buscar_cancion;
    };

    // Función para verificar si un artista está marcado como like
    const asignar_like_art = (id_artista) => {
        const encontrar_artista = artistas_con_like.some(artista => artista.id === id_artista);
        return encontrar_artista;
    };

    // Función para verificar si un álbum está marcado como like
    const asignar_like_album = (id_album) => {
        const encontrar_album = albumes_con_like.some(album => album.id === id_album);
        return encontrar_album;
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
            { /*si el boton es de artista se mapea el array de artista y se muestra la informacion de cada artista*/}

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
                                {haentradoencuenta && <BotonLikeArtistas cod_art={artista.cod_art} cod_usu={usuarioId} estado_megusta={asignar_like_art} />}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            { /*si el boton es de albumes se mapea el array de albumes y se muestra la informacion de cada album*/}
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
                                {haentradoencuenta && <BotonLikeAlbumes cod_album={album.id} cod_usu={usuarioId} estado_megusta={asignar_like_album} />}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            { /*si el boton es de canciones se mapea el array de canciones y se muestra la informacion de cada cancion*/}
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
                                {haentradoencuenta && <BotonLikeCanciones cod_cancion={cancion.id} cod_usu={usuarioId} estado_megusta={asignar_like_cancion} />}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BotonEstadisticasPrincipales;