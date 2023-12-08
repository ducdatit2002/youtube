import express from 'express';
import { login, signUp } from '../controllers/authController.js';

const authRoute = express.Router();

//login
authRoute.post
