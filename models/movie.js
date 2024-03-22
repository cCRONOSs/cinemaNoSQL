import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    //Campo -> tipo de dato
    nameMovie : String,
    director : String,
    releaseDate : Date,
    rating : Number,
    duration : Number,
    genre : String
});

export default mongoose.model('Movie', movieSchema)