import express from 'express';
import cors from 'cors';
import busquedacantantes from './src/api/funcionbusquedacantantes.js';
import ObtenerAllCantantes from './src/api/ObtenerAllCantantes.js';

const app = express();
const puertoacceso = 3000;

// Configurar CORS
app.use(cors());

// Ruta para buscar cantantes por nombre
app.get('/api/search', busquedacantantes);

app.listen(puertoacceso, () => {
    console.log(`Servidor de obtención de cantantes por nombres en http://localhost:${puertoacceso}`);
});

// Configurar otro servidor para obtener todos los cantantes
const appgetcantantes = express();
const puertoacceso2 = 3001;
appgetcantantes.use(cors());

// Ruta para obtener todos los cantantes
appgetcantantes.get('/api/getcantantes', ObtenerAllCantantes);

appgetcantantes.listen(puertoacceso2, () => {
    console.log(`Servidor de obtención de cantantes en http://localhost:${puertoacceso2}`);
});