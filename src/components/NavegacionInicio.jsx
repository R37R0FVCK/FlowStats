import { useState } from 'react';

const Menupantallamin = ({ accedioacuenta }) => {
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
        <img
          className='w-10 h-10'
          src="https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/3ceb3a02-b18c-4074-282b-999af8172b00/public"
          alt="icono menu"
        />
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
          {accedioacuenta ? (
            <button
              className="boton-oscuro text-black font-bold text-lg px-6 py-3 my-2"
              onClick={() => window.location.href = '/MiCuenta'}
            >
              Mi Cuenta
            </button>
          ) : (
            <>
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
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Menupantallamin;