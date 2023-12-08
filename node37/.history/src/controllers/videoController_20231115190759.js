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

        // SELECT video_id, video_name FROM video WHERE video_name LIKE '%code%'
        // let data = await model.video.findAll({
            
        //     where: {
        //         video_name: {
        //             [Op.like]: '%gaming%'
        //         }
        //     },

        //     attributes:["video_id","video_name"]
        // });
        // let data = await model.video.findAll();
        

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

const getVideoType = async (req, res) => {
    try {
        let data = await model.video_type.findAll();
        res.status(200).send(data);
    } catch (error) {
        
    }
}
export {
    getVideo,
    createVideo,
    getVideoId,
    getVideoType,
}


