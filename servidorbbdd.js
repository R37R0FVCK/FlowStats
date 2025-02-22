// iniciar server

import express from 'express';
import busqueda from './src/api/funcionbusqueda.js';

const app = express();
const puertoacceso = 3000;

app.get('/api/search', busqueda);

app.listen(puertoacceso, () => {
    console.log(`Servidor en http://localhost:${puertoacceso}`);
});