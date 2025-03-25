
// Lista de URLs de imágenes predefinidas
const img_predefinidas = [
    "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/a775fc71-3232-44e5-766a-33d11e9fc200/public", // Imagen de Young Miko
    "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/4d0d6145-36b8-482a-121e-0117d3576e00/public", // Imagen de Duki
    "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/18f43592-b3cb-4807-b3c0-24558c651000/public", // Imagen de Bizarrap
    "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/cf32183e-2f1a-4965-4b94-64433764b900/public", // Imagen de Bad Bunny
];

// Componente para mostrar las imágenes predefinidas
const MostrarImgPredefinidas = () => {
    // Función para redirigir al usuario a la página de selección de imagen
    const redireccion_imagen = (img_actualizar) => {
        // Redirige a la página con la imagen seleccionada como parámetro en la url
        window.location.href = `/PersonalizarImagen/ImagenSeleccionada?img=${encodeURIComponent(img_actualizar)}`;
    };

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Imágenes Predefinidas</h1>
            <div className="grid grid-cols-2 gap-4">
                {/* Mapea las imágenes predefinidas y las muestra como botones */}
                {img_predefinidas.map((imagen_nueva, posicion_img) => (
                    <button
                        key={posicion_img}
                        onClick={() => redireccion_imagen(imagen_nueva)}
                        className="focus:outline-none"
                    >
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