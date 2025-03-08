import React from 'react';
import '../styles/global.css';

//Componente proporcionado por: https://uiverse.io/javierBarroso
const BotonCerrarAnimado = ({ accion }) => {
    return (
        <button className="button" onClick={accion}>
            <span className="X" />
            <span className="Y" />
            <div className="close">Close</div>
        </button>
    );
}

export default BotonCerrarAnimado;