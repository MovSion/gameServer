import mysql from 'promise-mysql';
import keys from './keys';
//Creacion de pool de la base de datos
const pool = mysql.createPool(keys.database);
//Iniciar conexion de base de datos usa promesas
pool.getConnection()
    .then(connection => {
        //Inicio de conexion
        pool.releaseConnection(connection);
        console.log('DB is Connected');
    });
export default pool;