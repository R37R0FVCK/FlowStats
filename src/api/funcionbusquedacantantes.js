import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const busquedacantantes = async (respuesta) => {
    try {
        const busqueda = await prisma.artista.findMany();
        respuesta.json(busqueda);
        console.log(busqueda);
    } catch (error) {
        respuesta.status(500).json({ error: 'Error al realizar la búsqueda: ' + error.message });
    }
};

export default busquedacantantes;