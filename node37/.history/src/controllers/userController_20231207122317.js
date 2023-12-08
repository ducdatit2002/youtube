import { responseData } from "../config/Response.js"
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import bcrypt from 'bcrypt'
import {decodeToken} from '../config/jwt.js';

let model = initModels(sequelize);


export const getUser = async (req, res) => {
    try {

        let data = await model.users.findAll();

        responseData(res, "Thành công", data, 200);


    } catch {
        responseData(res, "Lỗi ...", "", 500);
    }
}


export const getInfo = async (req, res) => {
    // try {

        let { token } = req.headers;
        let accessToken = decodeToken(token);

        let getUser = await model.users.findOne({
            where: {
                user_id: accessToken.data.user_id
            }
        })

        if (!getUser) {
            responseData(res, "User không tồn tại", "", 404);
            return;
        }

        responseData(res, "Success", getUser, 200);


    // } catch {
    //     responseData(res, "Lỗi ...", "", 500);
    // }
}

export const updateInfo = async (req, res) => {
    try {

        // ko cho phép user thay đổi email
        // tách upload riêng avatar
        let { full_name, pass_word } = req.body;
        let { token } = req.headers;
        let accessToken = decodeToken(token);

        let getUser = await model.users.findOne({
            where: {
                user_id: accessToken.data.user_id
            }
        })

        getUser.pass_word = bcrypt.hashSync(pass_word, 10);
        getUser.full_name = full_name;


        await model.users.update(getUser.dataValues, {
            where: {
                user_id: accessToken.data.user_id
            }
        })


        responseData(res, "Update info success", "", 200);


    } catch {
        responseData(res, "Lỗi ...", "", 500);
    }
}