// package.json => yarn init => enter x 3.14

// yarn add express

//import framework express
import express from 'express';
const app = express();
//chèn middleware
app.use(express.json());
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


    res.send({id, userName, email, phone, sex}); //tất cả định dạng dữ liệu trừ number
});
