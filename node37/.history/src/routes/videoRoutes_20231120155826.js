import express from 'express';
import { createVideo, getVideo, getVideoByType, getVideoId, getVideoType } from '../controllers/videoController.js';

const videoRoute = express.Router();

// nơi quản lý API của đối tượng
// API lấy tất cả video
videoRoute.get("/get-video", getVideo)

// API lấy video theo typeId
videoRoute.get("/get-video-by-type/:typeId",getVideoByType)

videoRoute.post("/create-video", createVideo)
videoRoute.get("/get-video-id",getVideoId)

// API get video type
// /video/get-video-type
videoRoute.get("/get-video-type",getVideoType)

//API get video theo pagination
videoRoute.get("/get-video-page
export default videoRoute;