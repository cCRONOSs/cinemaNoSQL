/**
 * 1.-Crear un esqueleto
 * 2.-Crear modelo, asignando un nombre
 */

import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    //Campo -> tipo de dato
    dni: String,
    name:  String,
    lastname: String,
    birthday:  Date,
    rol: String,
    phoneNumber: Number,
    email: String,
    password: String,
    username: String,
});

/*const user = mongoose.model('user', userSchema);
export { user };*/

export default mongoose.model('User', userSchema)