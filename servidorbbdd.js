import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import busquedacantantes from './src/api/funcionbusquedacantantes.js';
import ObtenerAllCantantes from './src/api/ObtenerAllCantantes.js';
import Añadircantantes from './src/scripts/añadircantantesAstrodb.js';
import insertarUsuario from './src/api/insertarUsuario.js';

const api = express();
const puertoacceso = 3000;

// Configurar CORS
api.use(cors());

// Middleware para parsear JSON y URL-encoded
api.use(express.json());
api.use(bodyParser.urlencoded({ extended: true }));

// Ruta para buscar cantantes por nombre
api.get('/api/search', busquedacantantes);

// Ruta para obtener todos los cantantes
api.get('/api/obtenercantantes', ObtenerAllCantantes);

// Ruta para añadir cantantes desde una URL
api.post('/api/anadircantantes', Añadircantantes);

// Ruta para insertar un usuario
api.post('/api/insertarUsuario', insertarUsuario);

api.listen(puertoacceso, () => {
    console.log(`Servidor corriendo en http://localhost:${puertoacceso}`);
});