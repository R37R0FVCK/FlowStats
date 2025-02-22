import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const busqueda = async (req, res) => {
    const { cons } = req.query;
    if (!cons) {
        return res.status(400).json({ error: "Los datos introducidos no han podido ser procesados" });
    }

    try {
        const busqueda = await prisma.artista.findMany({
            where: {
                nom_art: {
                    contains: cons,
                },
            },
        });
        res.json(busqueda);
    } catch (error) {
        res.status(500).json({ error: 'Error al realizar la búsqueda: ' + error.message });
    }
};

export default busqueda;