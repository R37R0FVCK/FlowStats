import { useEffect, useState } from 'react';

const BotonLikeAlbum = ({ cod_album, cod_usu, estado_megusta }) => {
    // Estado para controlar si el álbum está marcado como like
    const [megusta, asignar_megusta] = useState(() => estado_megusta(cod_album));

    // Actualizar el estado cuando cambie el código del álbum o el estado inicial delike
    useEffect(() => {
        asignar_megusta(estado_megusta(cod_album));
    }, [cod_album, estado_megusta]);

    // Función para manejar la solicitud delike o unlike
    const albumes_gustados = async () => {
        try {
            // Enviar una solicitud POST al servidor para actualizar el estado de like
            const respuesta_envio = await fetch('http://localhost:4321', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cod_album, cod_usu }), // Enviar el código del álbum y del usuario
            });

            if (!respuesta_envio.ok) {
                throw new Error('Error al enviar los datos'); // Manejar errores en la solicitud
            }

            const datos = await respuesta_envio.json();
            asignar_megusta(!megusta); // Cambiar el estado de like
        } catch (error) {
            console.error('Error:', error); // Mostrar errores en la consola
        }
    };

    // Función para asignar o quitarlike  al álbum
    const cambio_estado = () => {
        albumes_gustados();
    };

    return (
        <div title="Like" className="heart-container" onClick={cambio_estado}>
            <input id="Give-It-An-Id" className="checkbox" type="checkbox" checked={megusta} readOnly />
            <div className="svg-container">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-outline"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
                    >
                    </path>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-filled"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
                    >
                    </path>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="100"
                    width="100"
                    className="svg-celebrate"
                >
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                </svg>
            </div>
        </div>
    );
};

export default BotonLikeAlbum;