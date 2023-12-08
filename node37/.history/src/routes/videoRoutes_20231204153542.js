import express from 'express';
import { createVideo, getVideo, getVideoByType, getVideoId, getVideoType, getVideoPage, getCommentVideo, commentVideo } from '../controllers/videoController.js';
import { checkToken, verifyToken } from '../config/jwt.js';

const videoRoute = express.Router();

// Refresh Token => làm mới lại token

// API get video pagination
videoRoute.get("/get-video-page/:page",
    verifyToken,
    getVideoPage)



// nơi quản lý API của đối tượng
// API lấy tất cả video
videoRoute.get("/get-video", getVideo)

// API get video theo video_id
videoRoute.get("/get-video-id/:video_id", getVideoId)

// API lấy video theo typeId
videoRoute.get("/get-video-by-type/:typeId", getVideoByType)

videoRoute.post("/create-video", createVideo)


// API get video type
// /video/get-video-type
videoRoute.get("/get-video-type", getVideoType)

// API get comment video
videoRoute.get("/get-comment-video/:videoId", getCommentVideo)

// API comment video
videoRoute.post("/comment-video", commentVideo)




export default videoRoute;