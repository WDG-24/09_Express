import { Router } from 'express';
import { getAllArticles, getArticleById, createArticle } from '#controllers';
import { paywallMiddleware } from '#middlewares';

const articleRoutes = Router();

articleRoutes.get('/', getAllArticles);
articleRoutes.get('/:id', paywallMiddleware, getArticleById);
articleRoutes.post('/', createArticle);

export default articleRoutes;
