import React from 'react';
import { server } from '../actions/index.ts';

const Registro = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await server.addUser(data);
            if (response.success) {
                alert('Usuario registrado con éxito');
            } else {
                alert('Error al registrar el usuario');
            }
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            alert('Error al registrar el usuario');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label>
                Nombre:
                <input type="text" name="nombre" required className="border p-2 rounded" />
            </label>
            <label>
                Contraseña:
                <input type="password" name="contraseña" required className="border p-2 rounded" />
            </label>
            <label>
                Apellidos:
                <input type="text" name="apellidos" required className="border p-2 rounded" />
            </label>
            <label>
                Correo:
                <input type="email" name="correo" required className="border p-2 rounded" />
            </label>
            <label>
                Dirección:
                <input type="text" name="direccion" required className="border p-2 rounded" />
            </label>
            <label>
                Fecha de Nacimiento:
                <input type="date" name="fecha_nacimiento" required className="border p-2 rounded" />
            </label>
            <label>
                Tipo de Usuario:
                <input type="text" name="tipo_usuario" required className="border p-2 rounded" />
            </label>
            <label>
                Teléfono:
                <input type="text" name="telefono" required className="border p-2 rounded" />
            </label>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Registrar</button>
        </form>
    );
};

export default Registro;