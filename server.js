/**
 *  1.- Importar express
 *  2.- Crear app con express
 *  3.- Usar .listen para abrir puertos
 */

import express from 'express'

const api  = express();

api.listen(8000, () => {
    console.log('API corriendo el puerto 8000');
});

