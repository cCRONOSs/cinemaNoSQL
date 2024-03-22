/**
 *  1.- Importar express
 *  2.- Crear app con express
 *  3.- Usar .listen para abrir puertos
 */
import express from 'express'
import { connect } from './config.js';
import { userRoutes } from './routes/userRoutes.js';
import { movieRoutes } from './routes/movieRoutes.js';
connect(); // Conecta a la base de datos

const api  = express();
api.use(express.json());// Permite que los body sean json
api.listen(8000, () => {
    console.log('API corriendo el puerto 8000');
});

api.get('/test', (req, res) => {
    res.send('Hola mundo');
});

api.use(userRoutes, movieRoutes);// Agregamos las rutas al servidor

