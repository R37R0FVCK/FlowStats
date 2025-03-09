import React from 'react';

const img_predefinidas = [
    "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/a775fc71-3232-44e5-766a-33d11e9fc200/public", //imagen young miko
    "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/4d0d6145-36b8-482a-121e-0117d3576e00/public", //imagen duki
    "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/18f43592-b3cb-4807-b3c0-24558c651000/public", //imagen bzrp
    "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/cf32183e-2f1a-4965-4b94-64433764b900/public", //imagen bad bunny
];

const MostrarImgPredefinidas = () => {
    const redireccion_imagen = (img_actualizar) => {
        window.location.href = `/PersonalizarImagen/ImagenSeleccionada?img=${encodeURIComponent(img_actualizar)}`;
    };

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Imágenes Predefinidas</h1>
            <div className="grid grid-cols-2 gap-4">
                {img_predefinidas.map((imagen_nueva, posicion_img) => (
                    <button key={posicion_img} onClick={() => redireccion_imagen(imagen_nueva)} className="focus:outline-none">
                        <img
                            src={imagen_nueva}
                            alt="Imagen predefinida"
                            className="w-24 h-24 object-cover rounded-full cursor-pointer"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MostrarImgPredefinidas;