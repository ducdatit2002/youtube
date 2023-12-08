import { responseData } from "../config/Response.js"
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import bcrypt from 'bcrypt';
let model = initModels(sequelize);

export const login = async (req, res) => {

    try {
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
            if (checkUser.pass_word == pass_word) {

                responseData(res, "Login thành công", "token", 200);
            } else {
                responseData(res, "Mật khẩu không đúng", "", 400);
            }
        } else {
            // ko tồn tại => sai email hoặc pass
            responseData(res, "Email không đúng", "", 400);
        }

    } catch {
        responseData(res, "Lỗi ...", "", 500);
    }

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
            pass_word: bcrypt.hashSync, // còn gặp lại
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