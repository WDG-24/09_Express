import type { RequestHandler } from 'express';

export const getAllUsers: RequestHandler = (req, res) => {
  res.json({ message: 'List of users' });
};

export const registerUser: RequestHandler = (req, res) => {
  res.status(201).json({
    message: 'User registered successfully',
    user: req.body,
  });
};
