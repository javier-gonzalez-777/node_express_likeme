import {Router} from 'express';
import { createPost, getAllPost } from '../controllers/post.controller.js';

const router = Router();

router.get ('/', getAllPost);
router.get('/posts', getAllPost);
router.post('/posts', createPost);

export default router;

//Router