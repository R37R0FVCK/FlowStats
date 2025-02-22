import { PrismaClient } from "@prisma/client";
const prismabusqueda = new PrismaClient();

export default async function busqueda(peticion, respuesta) {
    const { cons } = peticion.query;
    if (!cons) {
        const respuestaerror = "los datos introducidos no han podido ser procesados";
        return respuesta.status(400).json({ error: respuestaerror });
    }

    try {
        const busqueda = await prismabusqueda.artista.findMany({
            where: {
                nom_art: {
                    contains: cons,
                    mode: 'insensitive',
                },
            },
        });
        respuesta.json(busqueda);
    } catch (error) {
        respuesta.status(500).json({ error: 'Error al realizar la búsqueda: ' + error.message });
    }
}