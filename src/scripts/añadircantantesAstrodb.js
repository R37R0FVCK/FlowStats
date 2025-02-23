import { PrismaClient } from '@prisma/client';
import fetch from 'node-fetch';

const prisma = new PrismaClient();

const Añadircantantes = async (peticion, respuesta) => {
    const { url } = peticion.body;

    if (!url) {
        return respuesta.status(400).json({ error: 'Falta la URL' });
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const datos = await response.json();

        for (const cantante of datos) {
            await prisma.cantante.create({
                data: {
                    cod_art: cantante.cod_art,
                    nom_art: cantante.nom_art,
                    apel_art: cantante.apel_art,
                    nombre_real_art: cantante.nombre_real_art,
                    edad_art: cantante.edad_art,
                    oyentes_art: cantante.oyentes_art,
                    nacionalidad_art: cantante.nacionalidad_art,
                    anio_comienzo_art: cantante.anio_comienzo_art,
                    cod_manager: cantante.cod_manager,
                    cod_sello: cantante.cod_sello,
                },
            });
        }
        respuesta.status(201).json({ message: 'Cantantes añadidos con éxito' });
    } catch (error) {
        respuesta.status(500).json({ error: 'Error al añadir cantantes: ' + error.message });
    } finally {
        await prisma.$disconnect();
    }
};

export default Añadircantantes;