import express from 'express';
import { login, logout, register } from '../controller/Auth.controller.js';

const AuthRouter = express.Router();


AuthRouter.post('/signup', register);
AuthRouter.post('/login', login);
AuthRouter.post('/longout', logout)


export default AuthRouter;

