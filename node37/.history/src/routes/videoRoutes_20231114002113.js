import express from 'express';

const userRoute = express.Router();
userRoute.get("/video/get-video", getVideo)
userRoute.post("/video/create-video", createVideo)