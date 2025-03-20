import BotonCerrarAnimado from "../../../BotonCerrarAnimado.jsx";

const TarjetaInfoArtista = ({ artista, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 z-50">
            <div className="relative w-11/12 max-w-lg h-3/4 bg-black bg-opacity-50 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0">
                    <img
                        src={artista.imagen_artista}
                        alt={artista.nombre_artista}
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
                        <h2 className="text-4xl text-center font-bold text-white mb-4">{artista.nombre_artista}</h2>
                        <p className="text-xl text-white"><strong>Nombre:</strong> {artista.nombre_real} {artista.apellido_real}</p>
                        <p className="text-xl text-white"><strong>Edad:</strong> {artista.edad}</p>
                        <p className="text-xl text-white"><strong>Año de comienzo:</strong> {artista.año_comienzo}</p>
                        <p className="text-xl text-white"><strong>Nacionalidad:</strong> {artista.nacionalidad}</p>
                        <p className="text-xl text-white"><strong>Oyentes:</strong> {artista.oyentes.toLocaleString("es-ES")}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TarjetaInfoArtista;