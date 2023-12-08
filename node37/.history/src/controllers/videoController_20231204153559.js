// quản lý, thực hiện chức năng

// import Video from "../models/video.js";
import initModels from '../models/init-models.js';
import sequelize from '../models/connect.js';
import { Sequelize } from 'sequelize';

import { responseData } from '../config/Response.js';
import { decodeToken } from '../config/jwt.js';

let model = initModels(sequelize);
let Op = Sequelize.Op;

export const getVideoPage = async (req, res) => {
    try {

        let { page } = req.params;
        let pageSize = 3;

        let index = (page - 1) * pageSize;

        let dataCount = await model.video.count();
        let totalPage = Math.ceil(dataCount / pageSize);

        // SELECT * FROM video LIMIT index , pageSize
        let data = await model.video.findAll({
            offset: index,
            limit: pageSize

        });

        responseData(res, "Thành công", { data, totalPage }, 200);

    } catch {
        responseData(res, "Lỗi ...", "", 500);
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

        let data = await model.video.findAll({
            include: [model.users, "type"]
        });

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

const getVideoId = async (req, res) => {
    try {
        // new Date()
        let { video_id } = req.params;

        let dataPk = await model.video.findByPk(video_id);

        //  object => {}
        // JOIN
        let data = await model.video.findOne({
            where: {
                video_id
            },
            include: [model.users, "type"]
        })

        responseData(res, "Thành công", data, 200);

    }
    catch {
        responseData(res, "Lỗi ...", "", 500);

    }
}

export const getCommentVideo = async (req, res) => {
    try {
        let { videoId } = req.params;

        let data = await model.video_comment.findAll({
            where: {
                video_id: videoId
            },
            include: ["user"]
        });

        responseData(res, "Thành công", data, 200);

    } catch {
        responseData(res, "Lỗi ...", "", 500);

    }
}

export const commentVideo = async (req, res) => {
    try {
        let { token } = req.headers;
        // giải mã => object giống bên trang jwt.io
        let dToken = decodeToken(token);

        let { user_id } = dToken.data;
        let { video_id, content } = req.body;

        let newData = {
            user_id,
            video_id,
            content,
            date_create: new Date(),
            reply_list: "",
            timestamp: new Date()
        }

        await model.video_comment.create(newData);

        responseData(res, "Thành công", "", 200);

    } catch {
        responseData(res, "Lỗi ...", "", 500);

    }
}

export {
    getVideo,
    createVideo,
    getVideoId
}


