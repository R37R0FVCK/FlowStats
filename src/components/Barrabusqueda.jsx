import React, { useState } from 'react';

const BarraBusqueda = () => {
    const [titulo, asignartitulo] = useState([]);
    const [cons, asignarcons] = useState("");
    const [artistaEncontrado, asignarArtistaEncontrado] = useState("");

    const busqueda = async (event) => {
        const busqueda = event.target.value;
        asignarcons(busqueda);

        if (busqueda.length > 2) {
            try {
                console.log(`Buscando: ${busqueda}`);
                const respuesta = await fetch(`http://localhost:3000/api/search?cons=${busqueda}`);
                if (!respuesta.ok) {
                    throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
                }
                const datosrespuesta = await respuesta.json();
                console.log('Datos de respuesta:', datosrespuesta);
                asignartitulo(datosrespuesta);

                // Verificar si hay una coincidencia exacta
                const coincidencia = datosrespuesta.find(artista => artista.nom_art.toLowerCase() === busqueda.toLowerCase());
                if (coincidencia) {
                    asignarArtistaEncontrado(coincidencia.nom_art);
                } else {
                    asignarArtistaEncontrado("");
                }
            } catch (error) {
                console.error("Error al realizar la búsqueda:", error);
                asignartitulo([]);
                asignarArtistaEncontrado("");
            }
        } else {
            asignartitulo([]);
            asignarArtistaEncontrado("");
        }
    };

    return (
        <div className="flex items-start relative">
            <input
                type="text"
                placeholder="Busca cantantes y mas!!"
                className="bg-gray-200 p-2 rounded-lg"
                value={cons}
                onChange={busqueda}
            />
            {titulo.length > 0 && (
                <ul className="absolute bg-gray-200 w-full mt-2 rounded-lg">
                    {titulo.map((artista) => (
                        <li key={artista.cod_art} className="p-2 hover:bg-gray-300">
                            {artista.nom_art}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BarraBusqueda;