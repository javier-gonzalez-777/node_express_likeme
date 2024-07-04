import {Router} from 'express';
import { createPost, getAllPost, updatePeliculas,deletePost } from '../controllers/post.controller.js';

const router = Router();

router.get('/posts', getAllPost);
router.post('/post', createPost);
router.put('/like/:id', updatePeliculas);
router.delete('/posts/:id', deletePost); // Asegúrate de que esta línea esté correcta

export default router;

//Router