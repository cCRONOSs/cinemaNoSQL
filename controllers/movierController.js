import Movie from    '../models/movie.js';
//CREATE
    const createMovie = async (req, res) => {
        try{
            const newMovie = await Movie.create(req.body);
            res.json(newMovie);
        }
        catch(error){
            res.status(500).json({
                msg: 'Error al crear Pelicula',
                error,
            });
        }
};
//READ
// GET all movies
const getAllMovies = async (req, res) =>{
    const movies = await Movie.find();
    res.json(movies);
};
//GET movies by title
const getMovieByTitle = async (req,res) => {
    const movie = await Movie.find({nameMovie : req.params.nameTitle}); 
    res.json(movie); 
}
//GET movie by ranking
const getMovieByRanking = async (req,res) => {
    const movieRate = await Movie.find({ rating : req.params.rate});
    res.json(movieRate);  
}

export { createMovie, getAllMovies, getMovieByTitle, getMovieByRanking }