import { createPost, getAllPosts, getPostById } from '#controllers';
import { Router } from 'express';

const postRoutes = Router();

postRoutes.get('/', getAllPosts);
postRoutes.get('/:id', getPostById);
postRoutes.post('/', createPost);

export default postRoutes;
