import { responseData } from "../config/Response.js"
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import bcrypt from 'bcrypt'
import { decodeToken } from '../config/jwt.js';

let model = initModels(sequelize);

// SELECT * FROM users
// sequelize.query("SELECT * FROM users")

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

        //DELETE FROM users WHERE
        // await model.users.destroy({where: })

        responseData(res, "Update info success", "", 200);


    } catch {
        responseData(res, "Lỗi ...", "", 500);
    }
}

// FS => File System
import fs from 'fs';
import compress_images from 'compress-images';
// yarn add pngquant-bin@6.0.1 gifsicle@5.2.1
export const uploadAvatar = async (req, res) => {
    // form-data
    let { file } = req;

    // tối ưu hình ảnh , > 500KB
    compress_images(
        process.cwd() + "/public/imgs/" + file.filename,
        process.cwd() + "/public/video/", 
     { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "10"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
        function (error, completed, statistic) {
           // xóa tấm hình chưa tối ưu
        }
    );



    //
    let { hoTen, email } = req.body;


    let { token } = req.headers;
    let accessToken = decodeToken(token);
    let { user_id } = accessToken.data;

    let getUser = await model.users.findOne({
        where: {
            user_id
        }
    })

    getUser.avatar = file.filename;
    await model.users.update(
        getUser.dataValues,
        {
            where: {
                user_id
            }
        })
    res.send(file.filename);

    // tạo file => data.txt: node 37
    // fs.readFile(process.cwd() + "/public/imgs/" + file.filename, (error, data) => {
    //     //
    //     // let newName = "data:image/jpeg;base64," + Buffer.from(data).toString("base64");

    //     let newName = `data:${file.mimetype};base64,${Buffer.from(data).toString("base64")}`

    //     res.send(newName);
    //     return;
    // });

    // fs.writeFile(process.cwd() + "/public/file/data.json", "node 37", () => { })
    // fs.rename();
    // fs.copyFile();
    // fs.unlink();

    // /public/img/${file.filename}
    // res.send(file);
}