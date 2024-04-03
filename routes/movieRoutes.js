import express from 'express';
import { createMovie, getAllMovies, getMovieByTitle, getMovieByRanking } from '../controllers/movierController.js';

const movieRoutes = express.Router();

movieRoutes.post('/movie', createMovie);
movieRoutes.get('/movie', getAllMovies);
movieRoutes.get('/movie/:nameTitle', getMovieByTitle);
movieRoutes.get('/movie/rating/:rate', getMovieByRanking);

export { movieRoutes };