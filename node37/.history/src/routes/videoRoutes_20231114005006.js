import express from 'express';
import { getVideo, createVideo } from '../controllers/videoController.js';

const videoRoute = express.Router();

videoRoute.get("/get-video", getVideo)
videoRoute.post("/create-video", createVideo)
videoRoute.get("")
export default videoRoute;