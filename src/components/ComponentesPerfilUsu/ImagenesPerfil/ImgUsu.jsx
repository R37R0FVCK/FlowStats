import { FaPen } from 'react-icons/fa';
import { useState } from 'react';

// componente que muestra la imagen del usuario con la funcionalidad de edición
const ImgUsu = ({ ruta, alt }) => {
    // Estado para almacenar la ruta de la imagen
    const [rutaimagen] = useState(ruta);
    // Estado para controlar si el cursor está encima de la imagen
    const [encima, actualizarpos] = useState(false);

    // Función para redirigir al usuario a la página de personalización de imagen
    const redic_img_pers = () => {
        window.location.href = '/PersonalizarImagen/CambiarImagenUsuario';
    };

    return (
        <div>
            {/* div de la imagen con funcionalidad de mostrar el icono fapen al pasar por encima*/}
            <div
                className="relative w-24 h-24 rounded-full overflow-hidden"
                onMouseEnter={() => actualizarpos(true)}
                onMouseLeave={() => actualizarpos(false)}
            >
                {/* Imagen del usuario */}
                <img
                    src={rutaimagen}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
                {/* estado de cuando este encima el raton aparezca el icono para editar la imagen de usuario */}
                {encima && (
                    <div className="absolute inset-0 bg-gray-500/50 flex items-center justify-center">
                        <label className="cursor-pointer" onClick={redic_img_pers}>
                            <FaPen className="h-6 w-6 text-white" />
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImgUsu;