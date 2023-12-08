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

app.get("/demo", (req, res) => {
    res.send("Hello World");
});