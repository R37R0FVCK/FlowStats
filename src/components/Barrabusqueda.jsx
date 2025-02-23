import React, { useState } from 'react';

const BarraBusqueda = () => {
    const [titulo, asignartitulo] = useState([]);
    const [cons, asignarcons] = useState("");

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
            } catch (error) {
                console.error("Error al realizar la búsqueda:", error);
                asignartitulo([]);
            }
        } else {
            asignartitulo([]);
        }
    };

    return (
        <div className="flex items-start relative">
            <input
                type="text"
                placeholder="Busca cantantes y más!!"
                className="bg-gray-200 p-2 rounded-lg"
                value={cons}
                onChange={busqueda}
            />

            <ul className="absolute bg-white w-full mt-2 rounded-lg">
                {titulo.map((artista) => (
                    <li key={artista.cod_art} className="border-b border-gray-200 p-2">
                        {artista.nom_art}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BarraBusqueda;