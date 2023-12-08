// quản lý, thực hiện chức năng

// import Video from "../models/video.js";
import initModels from '../models/init-models.js';
import sequelize from '../models/connect.js';
import { Sequelize } from 'sequelize';

let model = initModels(sequelize);
let Op = Sequelize.Op;

const getVideo = async (req, res) => {
    try {
        // bất đồng bộ


        res.status(200).send(data);

        // ORM: sequelize, prisma
    } catch (exception) {
        res.status(500).send("Lỗi ...")
    }

}

const createVideo = (req, res) => {
    res.send("create video");
}

const getVideoId = (req, res) => {

    res.send("get video by id");
}

export {
    getVideo,
    createVideo,
    getVideoId
}


