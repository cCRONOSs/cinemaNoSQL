import express from 'express';
import { createUser, getAllUser } from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.post('/user', createUser);
userRoutes.get('/user', getAllUser);

export { userRoutes };