import express from 'express';
import { createVideo, getVideo, getVideoByType, getVideoId, getVideoType, getVideoPage } from '../controllers/videoController.js';

const videoRoute = express.Router();

// nơi quản lý API của đối tượng
// API lấy tất cả video
videoRoute.get("/get-video", getVideo)

// API lấy video theo typeId
videoRoute.get("/get-video-by-type/:typeId",getVideoByType)

videoRoute.post("/create-video", createVideo)

// API get video theo video_id
videoRoute.get("/get-video-id/:video_id",getVideoId)

// API get video type
// /video/get-video-type
videoRoute.get("/get-video-type",getVideoType)

// API get video pagination
videoRoute.get("/get-video-page/:page",getVideoPage)

//API get common video
videoRoute.get("/get-common-video
export default videoRoute;