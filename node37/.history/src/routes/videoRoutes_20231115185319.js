import express from 'express';
import { getVideo, createVideo, getVideoId } from '../controllers/videoController.js';

const videoRoute = express.Router();

videoRoute.get("/get-video", getVideo)
videoRoute.post("/create-video", createVideo)
videoRoute.get("/get-video-id", getVideoId)

//API get video type

export default videoRoute;