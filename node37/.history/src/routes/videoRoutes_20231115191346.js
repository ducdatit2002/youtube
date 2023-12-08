import express from 'express';
import { getVideo, createVideo, getVideoId, getVideoType } from '../controllers/videoController.js';

const videoRoute = express.Router();

videoRoute.get("/get-video", getVideo)
videoRoute.post("/create-video", createVideo)
videoRoute.get("/get-video-id", getVideoId)

//API lấy video theo <h1 class="display-1"></h1>
//API get video type
videoRoute.get("/get-video-type", getVideoType)
export default videoRoute;