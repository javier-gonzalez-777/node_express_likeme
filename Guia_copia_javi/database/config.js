import pg from 'pg';

import "dotenv/config" // version 20 inferiores. aca hay que instalar dotenv

//process.loadEnvFile() // Viene nativo.. no hay que instalar nada (*))


// sin variable de entorno
// const pool =new pg.pool({
//     host: 'localhost',
//     user: 'postgres',
//     password: s1st3m4s,
//     database: 'collection',
//     allowExit0nIdle:true,
// });

// con variables de entorno
const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const pool =new pg.Pool({
host:DB_HOST,
user:DB_USER,
password: DB_PASSWORD,
database: DB_DATABASE,
allowExitOnIdle: true,
});

pool.query("select Now()", (err, res)=>{
    if (err){
        console.log('Error coneccion a la BD:', err);
    }else{
        console.log('BD-Conectada, res.row[0].now');
    }
  });

  export default pool;
