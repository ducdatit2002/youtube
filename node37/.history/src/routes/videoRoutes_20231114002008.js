import express from 'express';

const app = express();
// nơi quản lý API của đối tượng
app.get("/video/get-video", getVideo)
app.post("/video/create-video", createVideo)