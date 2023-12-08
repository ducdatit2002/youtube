// authentication
// authoriztion

import express from 'express';
import { login, loginFacebook, signUp } from '../controllers/authController.js';

const authRoute = express.Router();

//login
authRoute.post("/login", login);
//signup
authRoute.post("/signup", signUp);

// login facebook
authRoute.post("/login-facebook",loginFacebook)

export default authRoute;

// yarn add bcrypt
// mã hóa pass word 
// so sánh dữ thô và dữ liệu mã hóa