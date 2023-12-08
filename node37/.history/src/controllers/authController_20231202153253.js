import { responseData } from "../config/Response";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

let model = initModels(sequelize);
export const login = () => {

}

export const signUp = async (req, res) => {
    try {
        let { full_name, email, pass_word} = res.body;
        let checkUser = await model.users.findOne({})
        let newData = {
            full_name: full_name,
            email: email,
            pass_word: pass_word,
            avatar: "",
            face_app_id: "",
            role: "user"
        }
        //INSERT INTO VALUE
        await model.users.create(newData);

        //thêm mới users => creates
    } catch {
        responseData(res, "Lỗi ...", 500);
    }
}
