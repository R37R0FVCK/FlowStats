import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const busquedacantantes = async (peticion, respuesta) => {
    const { cons } = peticion.query;
    if (!cons) {
        return respuesta.status(400).json({ error: "Los datos introducidos no han podido ser procesados" });
    }

    try {
        const busqueda = await prisma.artista.findMany({
            where: {
                nom_art: {
                    contains: cons,
                },
            },
        });
        respuesta.json(busqueda);
        console.log(busqueda);
    } catch (error) {
        respuesta.status(500).json({ error: 'Error al realizar la búsqueda: ' + error.message });
    }
};

export default busquedacantantes;