// package.json => yarn init => enter x 3.14

// yarn add express

//import framework express
import express from 'express';
const app = express();

//khởi tạo server BE node chạy port 8080
app.listen(8080);

// khởi động server node => node server.js

// yarn add nodemon

// GET => url: localhost:8000/demo
//endpoint / demo

app.get("/demo/:id2/:email2", (req, res) => {
    // C1: lấy từ url
        // - query string: /demo?id=123&email=ducdatit@gmail.com
        // - query params: /demo/123/ducdatit@gmail

    let id = req.query.id;
    let email = req.query.email;
    let id2 = req.params.id2;
    let email2 = req.params.email2;
    // C2: lấy từ JSON

    res.send("Hello World"); //tất cả định dạng dữ liệu trừ number
});
