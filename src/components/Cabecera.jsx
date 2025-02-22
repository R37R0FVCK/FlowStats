import React, { useState } from 'react';

const Cabecera = () => {
    const [titulo, asignartitulo] = useState([]);
    const [cons, asignarcons] = useState("");

    const busqueda = async (event) => {
        const busqueda = event.target.value;
        asignarcons(busqueda);

        if (busqueda.length > 2) {
            try {
                const respuesta = await fetch(`http://localhost:3000/api/search?cons=${busqueda}`);
                const datosrespuesta = await respuesta.json();
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
        <header>
            <div className="bg-orange-400 flex items-center p-4">
                <div className="flex items-start relative">
                    <input
                        type="text"
                        placeholder="Busca cantantes y mas!!"
                        className="bg-gray-200 p-2 rounded-lg"
                        value={cons}
                        onChange={busqueda}
                    />
                    <ul className="bg-white absolute mt-2 rounded-lg shadow-lg w-full">
                        {titulo.map((artista) => (
                            <li key={artista.cod_art} className="p-2 border-b border-gray-200">
                                {artista.nom_art}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center ml-94">
                    <h1 className="text-white text-4xl fuente_zen_dots mr-2">Flow</h1>
                    <img
                        src="https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/90b3847e-cb56-4b3d-9b1d-838b48f72100/public"
                        alt="logo FlowStats"
                        className="h-16 w-16 mx-0"
                    />
                    <h1 className="text-white fuente_zen_dots text-4xl ml-2">Stats</h1>
                </div>
                <a href="" className="text-black font-bold ml-auto mr-24">Acceder</a>
            </div>
            <span className="block w-full bg-black h-2"></span>
            {/* Barra de navegacion para enrutamiento entre paginas */}
            <nav className="flex justify-center h-12">
                <button className="boton-oscuro text-white px-4 py-2 flex-1 h-full">Inicio</button>
                <button className="boton-oscuro text-white px-4 py-2 flex-1 h-full">Noticias</button>
                <button className="boton-oscuro text-white px-4 py-2 flex-1 h-full">Estadisticas</button>
                <button className="boton-oscuro text-white px-4 py-2 flex-1 h-full">Explorar</button>
                <button className="boton-oscuro text-white px-4 py-2 flex-1 h-full">Contacto</button>
            </nav>
            <style>
                {`
          .fuente_zen_dots {
            font-family: "Zen Dots";
          }
          .boton-oscuro {
            background-color: rgb(55, 47, 58);
            transition: background-color 0.5s ease;
          }
          .boton-oscuro:hover {
            background-color: rgb(106, 98, 98);
          }
        `}
            </style>
        </header>
    );
};

export default Cabecera;