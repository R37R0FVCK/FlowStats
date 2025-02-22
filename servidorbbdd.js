import express from 'express';
import busquedacantantes from './src/api/funcionbusquedacantantes.js';

const app = express();
const puertoacceso = 3000;

app.get('/api/search', busquedacantantes);

app.listen(puertoacceso, () => {
    console.log(`Servidor en http://localhost:${puertoacceso}`);
});