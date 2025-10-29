import type { RequestHandler } from 'express';

export const getAllUsers: RequestHandler = (req, res) => {
  throw new Error('Error getting users', { cause: 404 });
  res.json({ message: 'List of users' });
};

// export const getAllUsers: RequestHandler = async (req, res, next) => {
//   try {
//     const users = await User.find();

//     if (!users.length) {
//       throw new Error('no users found', { cause: 404 });
//     }
//     res.json(users);
//   } catch (error) {
//     next();
//   }
// };

export const getUserById: RequestHandler = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Fetched user with ID: ${id}` });
};

export const registerUser: RequestHandler = (req, res) => {
  const newUser = req.body;

  res.status(201).json({
    message: 'Post created successfully',
    post: newUser,
  });
};
