/**
 *  1.- Importar express
 *  2.- Crear app con express
 *  3.- Usar .listen para abrir puertos
 */
import express from 'express'
import { connect } from './config.js';

connect(); // Conecta a la base de datos

const api  = express();

api.listen(8000, () => {
    console.log('API corriendo el puerto 8000');
});

api.get('/test', (req, res) => {
    res.send('Hola mundo');
});

