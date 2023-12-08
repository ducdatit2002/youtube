import express from 'express';
import videoRoute from './videoRoutes.js';

const rootRoute = express.Router();

rootRoute.use("/video", videoRoute)

rootRoute.
export default rootRoute;