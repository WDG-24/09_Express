import { Router } from 'express';
import { getAllUsers, getUserById, registerUser } from '#controllers';
import { maintenanceMode } from '#middlewares';

const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.get('/:id', maintenanceMode, getUserById);
userRoutes.post('/', registerUser);

export default userRoutes;
