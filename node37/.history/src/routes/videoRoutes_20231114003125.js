import express from 'express';
import { getVideo, createVideo } from '../controllers/';

const videoRoute = express.Router();

videoRoute.get("/video/get-video", getVideo)
videoRoute.post("/video/create-video", createVideo)

export default videoRoute;