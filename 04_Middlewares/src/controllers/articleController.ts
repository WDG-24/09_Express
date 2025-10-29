import type { RequestHandler } from 'express';

export const getAllArticles: RequestHandler = (req, res) => {
  res.json({ message: 'List of all articles' });
};

export const getArticleById: RequestHandler = (req, res) => {
  const { id } = req.params;
  res.json({
    message: `fetched article with ID: ${id}`,
  });
};

export const createArticle: RequestHandler = (req, res) => {
  const newArticle = req.body;

  res.status(201).json({
    message: 'Article created successfully',
    article: newArticle,
  });
};
