import { useState } from 'react';
import TarjetaInfoArtista from './TarjetaInfoArtista.jsx';

const DatosArtistas = ({ artistas_gustados }) => {
    // Estado para almacenar el artista seleccionado
    const [artistaSeleccionado, setArtistaSeleccionado] = useState(null);

    // Función para abrir el modal con la información del artista seleccionado
    const abrirModalArtista = (artista) => {
        setArtistaSeleccionado(artista);
    };

    // Función para cerrar el modal
    const cerrarModalArtista = () => {
        setArtistaSeleccionado(null);
    };

    return (
        <div>
            {/* Lista de artistas gustados */}
            <ul className="flex flex-col items-center">
                {artistas_gustados.map((artista) => (
                    <li
                        key={artista.id_artista}
                        className="mb-1 flex cursor-pointer items-center space-x-2 group"
                        onClick={() => abrirModalArtista(artista)} // Abre el modal al hacer clic
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

            {/* Modal con información del artista seleccionado */}
            {artistaSeleccionado && (
                <TarjetaInfoArtista
                    artista={artistaSeleccionado} // Pasa el artista seleccionado como prop
                    onClose={cerrarModalArtista} // Función para cerrar el modal
                />
            )}
        </div>
    );
};

export default DatosArtistas;