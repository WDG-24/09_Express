import type { RequestHandler } from 'express';
import { User } from '#models';

import type { z } from 'zod/v4';
import type { userInputSchema } from '#schemas';

type UserInputDTO = z.infer<typeof userInputSchema>;
type UserDTO = UserInputDTO;

export const registerUser: RequestHandler<
  unknown, // URL z.B. id: string
  UserDTO, // response
  UserInputDTO // request
> = async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });

  if (existingUser) {
    throw new Error('User with this email already exists', {
      cause: { status: 409 },
    });
  }

  const user = await User.create(req.body);
  res.status(201).json(user);
};

export const getAllUsers: RequestHandler = async (req, res) => {
  const users = await User.find();

  if (!users.length) {
    throw new Error('User not found', { cause: 404 });
    // throw new Error('User not found', { cause: { status: 418 } });
  }

  res.json(users);
};

export const getUserById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    throw new Error('User not found', { cause: 404 });
  }

  res.json(user);
};

export const updateUser: RequestHandler<
  { id: string },
  UserDTO,
  UserInputDTO
> = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { firstName, lastName, email },
    { new: true }
  );

  if (!updatedUser) {
    throw new Error('User not found', { cause: 404 });
  }
  res.status(200).json(updatedUser);
};

export const deleteUser: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const deletedUser = await User.findByIdAndDelete(id);

  if (!deletedUser) {
    throw new Error('User not found', { cause: 404 });
  }

  res.status(200).json({ message: 'User deleted successfully' });
};
