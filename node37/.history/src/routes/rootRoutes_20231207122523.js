import express from 'express';
import videoRoute from './videoRoutes.js';
import authRoute from './authRoutes.js';
import userRoute from './userRoute.js';

const rootRoute = express.Router();

rootRoute.use("/video", videoRoute)

rootRoute.use("/auth", authRoute)

rootRoute.use("/user", userRoute)


export default rootRoute;