import express from 'express';
import { createMovie, getAllMovies } from '../controllers/movierController.js';

const movieRoutes = express.Router();

movieRoutes.post('/movie', createMovie);
movieRoutes.get('/movie', getAllMovies);

export { movieRoutes };