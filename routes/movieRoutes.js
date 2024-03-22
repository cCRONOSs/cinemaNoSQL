import express from 'express';
import { createMovie } from '../controllers/movierController.js';

const movieRoutes = express.Router();

movieRoutes.post('/movie', createMovie);

export { movieRoutes };