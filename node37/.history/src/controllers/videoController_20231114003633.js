const getVideo = (req, res) => {
    try {
        res.status(200).send("get video");
    } catch (exception) {
        res.status(500).send("Lỗi ...")
    }
}
const createVideo = (req, res) => {
    res.send("create video")
}
export {
    getVideo,
    createVideo
}

import mysql from 'mysql2';
const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    port: "3307",
    database: "db_youtube"
});