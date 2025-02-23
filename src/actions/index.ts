import { db, User } from 'astro:db';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
    addUser: defineAction({
        input: z.object({
            nombre: z.string(),
            contraseña: z.string(),
            apellidos: z.string(),
            correo: z.string(),
            direccion: z.string(),
            fecha_nacimiento: z.string(),
            tipo_usuario: z.string(),
            telefono: z.string(),
        }),
        handler: async (input) => {
            try {
                await db.insert(User).values(input);
                return { success: true };
            } catch (error) {
                console.error('Error al insertar el usuario:', error);
                return { success: false, error: (error as Error).message };
            }
        },
    }),
    getUsers: defineAction({
        handler: async () => {
            try {
                const users = await db.select().from(User);
                return { success: true, users };
            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
                return { success: false, error: (error as Error).message };
            }
        },
    }),
};