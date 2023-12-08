// package.json => yarn init => enter x 3.14

// yarn add express

//import framework express
import express from 'express';
const app = express();
//chèn middleware
app.use(express.json());
//yarn add cors
  // cho phép FE gọi API từ BE
import cors from 'cors';
app.use(cors({
    origin: "*"
}));
//khởi tạo server BE node chạy port 8080
app.listen(8080);
// khởi động server node => node server.js

// yarn add nodemon

// GET => url: localhost:8000/demo
//endpoint / demo

app.get("/demo", (req, res) => {
    // C1: lấy từ url
        // - query string: /demo?id=123&email=ducdatit@gmail.com
        // - query params: /demo/123/ducdatit@gmail
    //destructering

    //let {id, email} = req.query;
    //let {id2, email2} = req.params;
    // C2: lấy từ JSON
    let {id, userName, email, phone, sex} = req.body;


    res.status(200).send({id, userName, email, phone, sex}); //tất cả định dạng dữ liệu trừ number
});

//yarn add mysql2

import mysql from 'mysql2';
const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    port: "3307",
    database: "db_youtube"
});

// endpoint: viết thường, cách nhau bởi dấu gạch ngang

import { getVideo } from './controllers/videoController.js';

// localhost:8080/video/get-video
app.get("/video/get-video", getVideo)
