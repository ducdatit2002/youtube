import express from 'express';
import { getVideo, createVideo, getVideoId, getVideoType } from '../controllers/videoController.js';

const videoRoute = express.Router();

videoRoute.get("/get-video", getVideo)
videoRoute.post("/create-video", createVideo)
videoRoute.get("/get-video-id", getVideoId)

//API lấy video theo typeID
videoRoute.get("/get-video-by-type", getVideoType)
//API get video type
videoRoute.get("/get-video-type", getVideoType)
export default videoRoute;