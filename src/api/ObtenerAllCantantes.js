import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const ObtenerAllCantantes = async (req, res) => {
    try {
        const busqueda = await prisma.artista.findMany();
        res.json(busqueda);
        // console.log(busqueda);
    } catch (error) {
        res.status(500).json({ error: 'Error al realizar la búsqueda: ' + error.message });
    }
};

export default ObtenerAllCantantes;