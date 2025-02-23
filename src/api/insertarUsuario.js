import { db, User } from 'astro:db';

const insertarUsuario = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { nombre, contraseña, apellidos, correo, direccion, fecha_nacimiento, tipo_usuario, telefono } = req.body;

    // Agregar registros en la consola para verificar los valores recibidos
    console.log("Valores recibidos:", {
        nombre,
        contraseña,
        apellidos,
        correo,
        direccion,
        fecha_nacimiento,
        tipo_usuario,
        telefono,
    });

    if (
        typeof nombre !== 'string' ||
        typeof contraseña !== 'string' ||
        typeof apellidos !== 'string' ||
        typeof correo !== 'string' ||
        typeof direccion !== 'string' ||
        typeof fecha_nacimiento !== 'string' ||
        typeof tipo_usuario !== 'string' ||
        typeof telefono !== 'string'
    ) {
        return res.status(400).json({ error: 'Datos inválidos' });
    }

    try {
        await db.insert(User).values({
            nombre,
            contraseña,
            apellidos,
            correo,
            direccion,
            fecha_nacimiento,
            tipo_usuario,
            telefono,
        });
        res.status(201).json({ success: true });
    } catch (error) {
        console.error('Error al insertar el usuario:', error);
        res.status(500).json({ error: 'Error al insertar el usuario' });
    }
};

export default insertarUsuario;