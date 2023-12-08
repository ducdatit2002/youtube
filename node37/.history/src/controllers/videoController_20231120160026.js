// quản lý, thực hiện chức năng

// import Video from "../models/video.js";
import initModels from '../models/init-models.js';
import sequelize from '../models/connect.js';
import { Sequelize } from 'sequelize';

import { responseData } from '../config/Response.js';

let model = initModels(sequelize);
let Op = Sequelize.Op;

export const getVideoPage = async (req, res) => {
    try {
        let { page } = req.params;
        let pageSize = 3
    } catch {

    }
}
export const getVideoByType = async (req, res) => {
    try {
        let { typeId } = req.params;

        let data = await model.video.findAll({
            where: {
                type_id: typeId
            }
        })
        
        responseData(res, "Thành công", data, 200);

    } catch {
        responseData(res, "Lỗi ...", "", 500);
    }
}

export const getVideoType = async (req, res) => {
    try {

        let data = await model.video_type.findAll();

        // res.status(200).send(data);
        responseData(res, "Thành công", data, 200);
    } catch {
        // res.status(500).send("Lỗi ...")
        responseData(res, "Lỗi ...", "", 500);

    }
}

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

        let data = await model.video.findAll();

        // res.status(200).send(data);
        responseData(res, "Thành công", data, 200);

        // ORM: sequelize, prisma
    } catch (exception) {
        // res.status(500).send("Lỗi ...")
        responseData(res, "Lỗi ...", "", 500);

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


