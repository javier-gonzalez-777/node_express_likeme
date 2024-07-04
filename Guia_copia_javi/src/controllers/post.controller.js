import { createPostModel, getAllPostModel, updatePeliculasModel,deletePostModel} from '../models/post.model.js';

// GET
export const getAllPost = async (req, res) => {
    try {
        const posts = await getAllPostModel();
        res.status(200).json(posts); // Devuelve directamente la lista de posts
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST
export const createPost = async (req, res) => {
    try {
        const { titulo, img, descripcion } = req.body;
        const newPost = await createPostModel({ titulo, img, descripcion, likes:0 });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE
export const updatePeliculas= async (req, res) => {
try{
    const { id }= req.params; // pasamos id por parametros
    const { likes } = req.body; // pasamos los datos por un objeto
    console.log('valor del likes', likes);
    const updatePost = await updatePeliculasModel(id, likes);
    console.log('Resultado...X:', updatePost);
 
    res.status(200).json({updatePost})
}catch (error){
    
    res.status(500).send(error.message);
}
};

// DELETE
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('valor del id', id);
        await deletePostModel(id);
        res.status(204).json({}); // enviar un json vacio
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// CONTROLLERS