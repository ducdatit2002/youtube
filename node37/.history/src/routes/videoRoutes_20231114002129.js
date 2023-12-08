import express from 'express';
import { getVideo, createVideo } from './controllers/videoController.js';

const userRoute = express.Router();

userRoute.get("/video/get-video", getVideo)
userRoute.post("/video/create-video", createVideo)