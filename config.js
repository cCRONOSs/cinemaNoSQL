import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); /* se instala dotenv para que se pueda leer los archivos de entorno .env*/


const connect = () => {
    mongoose.connect(process.env.DB_URI);

    const connection = mongoose.connection;
    connection.once('open', ()=>{
        console.log('Conexión a base de datos exitosa');
    });
    connection.once('error', () => {
        console.error('Error en la conexion con la base de datos')
    })
    };

export { connect }
