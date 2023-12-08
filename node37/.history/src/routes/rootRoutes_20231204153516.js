import express from 'express';
import videoRoute from './videoRoutes.js';
import authRoute from './authRoutes.js';

const rootRoute = express.Router();

rootRoute.use("/video", videoRoute)

rootRoute.use("/auth", authRoute)

export default rootRoute;