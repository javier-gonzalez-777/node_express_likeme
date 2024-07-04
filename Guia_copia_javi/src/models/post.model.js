// donde nosostro crearemos Query
import pool from '../../database/config.js'

// get all song

export const getAllPostModel = async () =>{  // ya se esporto la constante
    const SQLquery = {text: 'SELECT * FROM posts'};

    try {
        const result = await pool.query(SQLquery)
        console.log(result.rows) ;
        return result.rows

    }catch(error) {
        console.log(error);
    }
   
}

//POST
export const createPostModel = async ({ titulo, img, descripcion, likes }) => {
   
    const SQLquery = {
        text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
        values: [ titulo, img, descripcion, likes ],
    };
    try {
        console.log('Ejecutando consulta..:', SQLquery); // Depuración
        const result = await pool.query(SQLquery);
        console.log('Resultado de la consulta...:', result.rows[0]); // Depuración
        return result.rows[0];
    } catch (error) {
        console.log(error);
    }
};

export const updatePeliculasModel = async(id,  likes ) => {
    const result = await pool.query('UPDATE posts SET  likes=$1  WHERE id=$2 RETURNING *',
        [ likes, id]
        
    ); 
  
        return result.rows[0];

}

// Delete a post
export const deletePostModel = async (id) => {
    const SQLquery = {
        text: 'DELETE FROM posts WHERE id = $1',
        values: [id],
    };
    try {
        await pool.query(SQLquery);
    } catch (error) {
        console.log(error);
    }
};

// Modelo > Controlle > router = MVC
