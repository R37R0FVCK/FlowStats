import { useState } from 'react';

const Menupantallamin = () => {
  const [abrirmenu, estadomenu] = useState(false);

  const activarmenu = () => {
    estadomenu(!abrirmenu);
  };

  return (
    <div className="relative md:hidden">
      <button
        className="text-white px-4 py-2"
        onClick={activarmenu}
      >
        ☰
      </button>
      {abrirmenu && (
        <div className="fixed inset-0 bg-orange-400 flex flex-col items-center justify-center z-50">
          <button
            className="text-white px-4 py-2 self-end"
            onClick={activarmenu}
          >
            ✖
          </button>
          <button
            className="boton-oscuro text-black font-bold text-lg px-6 py-3 my-2"
            onClick={() => window.location.href = '/'}
          >
            Inicio
          </button>
          <button
            className="boton-oscuro text-black font-bold text-lg px-6 py-3 my-2"
            onClick={() => window.location.href = '/Noticias'}
          >
            Noticias
          </button>
          <button
            className="boton-oscuro text-black font-bold text-lg px-6 py-3 my-2"
            onClick={() => window.location.href = '/Estadisticas'}
          >
            Estadisticas
          </button>
          <button
            className="boton-oscuro text-black font-bold text-lg px-6 py-3 my-2"
            onClick={() => window.location.href = '/Explorar'}
          >
            Explorar
          </button>
          <button
            className="boton-oscuro text-black font-bold text-lg px-6 py-3 my-2"
            onClick={() => window.location.href = '/Contacto'}
          >
            Contacto
          </button>
          <button
            className="boton-oscuro text-black font-bold text-lg px-6 py-3 my-2"
            onClick={() => window.location.href = '/Acceder'}
          >
            Acceder
          </button>
          <button
            className="boton-oscuro text-black font-bold text-lg px-6 py-3 my-2"
            onClick={() => window.location.href = '/Registro'}
          >
            Registrarse
          </button>
        </div>
      )}
    </div>
  );
};

export default Menupantallamin;