import express from 'express';
import { login, signUp, loginFacebook } from '../controllers/authController.js';

const authRoute = express.Router();

//login
authRoute.post('/login', login);
//signUp
authRoute.post('/signup', signUp);

authRoute.post('/login-facebook/:faceAppId', loginFacebook);

export default authRoute; 

1063187271380849