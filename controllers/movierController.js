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
const getAllMovies = async (req, res) =>{
    const movies = await Movie.find();
    res.json(movies);
};

export { createMovie, getAllMovies }