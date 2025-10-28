import { Router } from 'express';
import { getAllUsers, registerUser } from '#controllers';

const userRoutes = Router();

// userRoutes.get('/', (req, res) => {
//   res.json({ message: 'List of users' });
// });

// userRoutes.post('/', (req, res) => {
//   res.json({
//     message: 'User registered successfully',
//     user: req.body,
//   });
// });

userRoutes.get('/', getAllUsers);
userRoutes.post('/', registerUser);

export default userRoutes;
