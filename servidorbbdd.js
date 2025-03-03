import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import busquedacantantes from './src/api/funcionbusquedacantantes.js';
import ObtenerAllCantantes from './src/api/ObtenerAllCantantes.js';
import Añadircantantes from './src/scripts/añadircantantesAstrodb.js';

const api = express();
const puertoacceso = 3000;

api.use(cors());

api.use(express.json());
api.use(bodyParser.urlencoded({ extended: true }));

api.get('/api/search', busquedacantantes);

api.get('/api/obtenercantantes', ObtenerAllCantantes);

api.post('/api/anadircantantes', Añadircantantes);


api.listen(puertoacceso, () => {
    console.log(`Servidor corriendo en http://localhost:${puertoacceso}`);
});