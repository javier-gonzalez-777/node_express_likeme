import { createPostModel, getAllPostModel } from '../models/post.model.js';

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
        const newPost = await createPostModel({ titulo, img, descripcion, likes: 0 });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CONTROLLERS