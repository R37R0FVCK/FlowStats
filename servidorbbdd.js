const express = require('express');
const { PrismaClient } = require('@prisma/client');
const busqueda = require('./src/api/funcionbusqueda');

const app = express();
const puertoacceso = 3000;
const prisma = new PrismaClient();

app.get('/api/search', busqueda);

// Endpoint de prueba para verificar la conexión a la base de datos
app.get('/api/test-db', async (req, res) => {
    try {
        await prisma.$connect();
        res.status(200).send('Conexión a la base de datos exitosa');
    } catch (error) {
        res.status(500).send('Error al conectar a la base de datos: ' + error.message);
    } finally {
        await prisma.$disconnect();
    }
});

app.listen(puertoacceso, () => {
    console.log(`Servidor en http://localhost:${puertoacceso}`);
});