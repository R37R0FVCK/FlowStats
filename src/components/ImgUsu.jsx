import { FaPen } from 'react-icons/fa';
import BotonCerrarAnimado from './BotonCerrarAnimado';

const ImgUsu = ({ ruta, alt }) => {
    const [rutaimagen, establecerruta] = useState(ruta);
    const [encima, actualizarpos] = useState(false);
    const [ventanaeleccion, establecerestadoventana] = useState(false);

    const img_predefinidas = [
        'https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/a775fc71-3232-44e5-766a-33d11e9fc200/public', //imagen young miko
        'https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/4d0d6145-36b8-482a-121e-0117d3576e00/public', //imagen duki
        'https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/18f43592-b3cb-4807-b3c0-24558c651000/public', //imagen bzrp
        'https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/cf32183e-2f1a-4965-4b94-64433764b900/public', //imagen  bad bunny



    ]
    const cambiar_img_perfil = (ficheroaelegir) => {
        const fichero = ficheroaelegir.target.files[0];
        if (fichero) {
            const lecfich = new FileReader();
            lecfich.onload = (ficheroelegido) => {
                establecerruta(ficheroelegido.target.result);
                establecerestadoventana(false);
            };
            lecfich.readAsDataURL(fichero);
        }
    };

    const imagenespredefinidas = () => {
        // Lógica para manejar imágenes por defecto
        console.log("Imágenes por defecto");
    };

    const imagenesaelegir = () => {
        // Lógica para manejar imágenes personalizadas
        console.log("Imágenes personalizadas");
    };

    return (
        <div>
            <div
                className="relative w-24 h-24 rounded-full overflow-hidden"
                onMouseEnter={() => actualizarpos(true)}
                onMouseLeave={() => actualizarpos(false)}
            >
                <img
                    src={rutaimagen}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
                {encima && (
                    <div className="absolute inset-0 bg-gray-500/50 flex items-center justify-center">
                        <label className="cursor-pointer" onClick={() => establecerestadoventana(true)}>
                            <FaPen className="h-6 w-6 text-white" />
                        </label>
                    </div>
                )}
            </div>
            {ventanaeleccion && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
                        <BotonCerrarAnimado accion={() => establecerestadoventana(false)} />
                        <h2 className="text-xl font-semibold mb-4">Seleccionar Imagen</h2>
                        <div className="flex justify-around mb-4">
                            <button onClick={imagenespredefinidas} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Imágenes por defecto
                            </button>
                            <button onClick={imagenesaelegir} className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
                                Imágenes personalizadas
                            </button>
                        </div>
                        <input type="file" onChange={cambiar_img_perfil} className="w-full p-2 border rounded" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImgUsu;