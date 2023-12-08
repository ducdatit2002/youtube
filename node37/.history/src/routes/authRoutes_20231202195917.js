import express from 'express';
import { login, signUp } from '../controllers/authController.js';

const authRoute = express.Router();

//login
authRoute.post('/login', login);
//signUp
authRoute.post('/signup', signUp);
authRoute.post('/signup', signUp);

export default authRoute; 