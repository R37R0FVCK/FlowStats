import { FaPen } from 'react-icons/fa';
import { useState } from 'react';

const ImgUsu = ({ ruta, alt }) => {
    const [rutaimagen] = useState(ruta);
    const [encima, actualizarpos] = useState(false);

    const redic_img_pers = () => {
        window.location.href = '/PersonalizarImagen/CambiarImagenUsuario';
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