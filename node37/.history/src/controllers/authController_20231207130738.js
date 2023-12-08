import { responseData } from "../config/Response.js"
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

import bcrypt from 'bcrypt';
import { checkRefToken, checkToken, createRefToken, createToken, decodeToken } from "../config/jwt.js";

let model = initModels(sequelize);

export const login = async (req, res) => {

    // try {
    let { email, pass_word } = req.body;

    // check email và pass_word == table user
    // SELECT * FROM users WHERE email=email AND pass_word= pass_word
    // if(email==email && pass_word==pass_word)
    let checkUser = await model.users.findOne({
        where: {
            email: email
        }
    })


    // tồn tại => login thành công
    if (checkUser) {

        if (bcrypt.compareSync(pass_word, checkUser.pass_word)) {

            // miniliseconds 
            let key = new Date().getTime();

            let token = createToken({
                user_id: checkUser.user_id,
                key
            });

            // khởi tạo refresh token
            let refToken = createRefToken({
                user_id: checkUser.user_id,
                key
            });

            // lưu refresh token vào table user

            // UPDATE users SET ... WHERE ...
            await model.users.update(
                { ...checkUser.dataValues, refresh_token: refToken }, {
                where: { user_id: checkUser.user_id }
            });

            responseData(res, "Login thành công", token, 200);
        } else {
            responseData(res, "Mật khẩu không đúng", "", 400);
        }
    } else {
        // ko tồn tại => sai email hoặc pass
        responseData(res, "Email không đúng", "", 400);
    }

    // } catch {
    //     responseData(res, "Lỗi ...", "", 500);
    // }

}

export const signUp = async (req, res) => {
    try {

        let { full_name, email, pass_word } = req.body;

        let checkUser = await model.users.findOne({
            where: {
                email
            }
        })

        // check trùng email
        if (checkUser) {
            // res.status(400).send("Email đã tồn tại");
            responseData(res, "Email đã tồn tại", "", 400);
            return;
        }

        let newData = {
            full_name,
            email,
            pass_word: bcrypt.hashSync(pass_word, 10), // còn gặp lại
            avatar: "",
            face_app_id: "",
            role: "user"
        }


        // Create => thêm mới users
        // INSERT INTO VALUES
        await model.users.create(newData)

        responseData(res, "Đăng ký thành công", "", 200);


    } catch {
        responseData(res, "Lỗi ...", "", 500);
    }
}

export const loginFacebook = async (req, res) => {
    try {

        let { full_name, faceAppId } = req.body;

        // kiểm tra facebook app id
        let checkUser = await model.users.findOne({
            where: {
                face_app_id: faceAppId
            }
        })

        // nếu đã tồn tại => login
        if (!checkUser) {
            // nếu chưa tồn tại => thêm user => login
            let newData = {
                full_name: full_name,
                email: "",
                pass_word: "", // còn gặp lại
                avatar: "",
                face_app_id: faceAppId,
                role: "user"
            }
            await model.users.create(newData)

        }

        responseData(res, "Login thành công", "token", 200);

    } catch {
        responseData(res, "Lỗi ...", "", 500);
    }
}


export const tokenRef = async (req, res) => {
    try {

        let { token } = req.headers;

        // check token
        let check = checkToken(token);
        if (check != null && check.name != "TokenExpiredError") {
            // token không hợp lệ
            res.status(401).send(check.name);
            return;
        }


        // {data: { user_id: }} 
        let accessToken = decodeToken(token);

        // lấy thông tin user trong database
        let getUser = await model.users.findOne({
            where: {
                user_id: accessToken.data.user_id
            }
        })

        // check token
        let checkRef = checkRefToken(getUser.refresh_token);
        if (checkRef != null) {
            // check refresh token của mình còn hạn hay không
            res.status(401).send(check.name);
            return;
        }

        // check code 
        let refToken = decodeToken(getUser.refresh_token);
        if (accessToken.data.key != refToken.data.key) {
            res.status(401).send(check.name);
            return;
        }

        // tạo mới access token
        let newToken = createToken({
            user_id: getUser.user_id,
            key: refToken.data.key
        })

        responseData(res, "", newToken, 200);

    } catch {
        responseData(res, "Lỗi ...", "", 500);
    }
}


export const logout = async (req, res) => {
    // try {

    let { token } = req.headers;

    // {data: { user_id: }} 
    let accessToken = decodeToken(token);

    // lấy thông tin user trong database
    let getUser = await model.users.findOne({
        where: {
            user_id: accessToken.data.user_id
        }
    })

    await model.users.update(
        { ...getUser.dataValues, refresh_token: "" }, {
        where: { user_id: getUser.user_id }
    });


    responseData(res, "", newToken, 200);

    // } catch {
    //     responseData(res, "Lỗi ...", "", 500);
    // }
}