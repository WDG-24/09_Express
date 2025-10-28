import type { RequestHandler } from 'express';

export const getAllPosts: RequestHandler = (req, res) => {
  res.json({ message: 'List of posts' });
};

export const createPost: RequestHandler = (req, res) => {
  const newPost = req.body;

  res.status(201).json({
    message: 'Post created',
    post: newPost,
  });
};

export const getPostById: RequestHandler = (req, res) => {
  const { id } = req.params;

  res.json({ message: `Fetched post with ID: ${id}` });
};

export const updatePost: RequestHandler = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  res.json({
    message: `Post with ID: ${id} updated successfully`,
    updatePost: updatedData,
  });
};

export const deletePost: RequestHandler = (req, res) => {
  const { id } = req.params;

  res.json({ message: `Deleted post with ID:${id}` });
};
