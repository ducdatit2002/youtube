import express from 'express';
import { createVideo, getVideo, getVideoByType, getVideoId, getVideoType, getVideoPage } from '../controllers/videoController.js';

const videoRoute = express.Router();

// nơi quản lý API của đối tượng
// API lấy tất cả video
videoRoute.get("/get-video", getVideo)

// API lấy video theo typeId
videoRoute.get("/get-video-by-type/:typeId",getVideoByType)

videoRoute.post("/create-video", createVideo)

//API get video id
videoRoute.get("/get-video-id/:videoId",getVideoId)

// API get video type
// /video/get-video-type
videoRoute.get("/get-video-type",getVideoType)

//API get video theo pagination
videoRoute.get("/get-video-page/:page",getVideoPage)



export default videoRoute;