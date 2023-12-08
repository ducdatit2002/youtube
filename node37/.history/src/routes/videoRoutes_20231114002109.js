import express from 'express';

const userRoute = express.Router();
// nơi quản lý API của đối tượng
userRoute.get("/video/get-video", getVideo)
userRoute.post("/video/create-video", createVideo)