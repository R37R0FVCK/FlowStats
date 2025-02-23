import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const busquedacantantes = async (req, res) => {
    const { cons } = req.query;

    if (!cons) {
        return res.status(400).json({ error: 'Falta el parámetro de consulta' });
    }

    try {
        const resultados = await prisma.artista.findMany({
            where: {
                nom_art: {
                    contains: cons,
                    mode: 'insensitive',
                },
            },
        });
        res.status(200).json(resultados);
    } catch (error) {
        res.status(500).json({ error: 'Error al realizar la búsqueda: ' + error.message });
    } finally {
        await prisma.$disconnect();
    }
};

export default busquedacantantes;