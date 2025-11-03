import { Router } from 'express';
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from '#controllers';
import { upload, validateBodyZod } from '#middlewares';
import { postInputSchema } from '#schemas';

const postRoutes = Router();

postRoutes.get('/', getAllPosts);
// postRoutes.post(
//   '/',
//   upload.single('image'),
//   validateBodyZod(postInputSchema),
//   createPost
// );

postRoutes.post(
  '/',
  upload.array('image', 5),
  validateBodyZod(postInputSchema),
  createPost
);

postRoutes.get('/:id', getPostById);
postRoutes.put('/:id', updatePost);
postRoutes.delete('/:id', deletePost);

export default postRoutes;
