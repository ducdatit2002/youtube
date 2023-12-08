import express from 'express';
import { getVideo, createVideo } from './controllers/videoController.js';

const videoRoute = express.Router();

videoRoute.get("/video/get-video", getVideo)
userRoute.post("/video/create-video", createVideo)

export default videoRoute;