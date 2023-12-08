import { responseData } from "../config/Response";
import initModels from "../models/init-models";

export const login = () => {

}

export const signUp = () => {
    try {
        let { full_name, email, pass_word} = res.body;

        let newData = {
            full_name: full_name,
            email: email,
            pass_word: pass_word,
            avatar: "",
            face_app_id: "",
            role: "user"
        }
        //INSERT INTO VALUE
        model.users.create(newData);

        //thêm mới users => creates
    } catch {
        responseData(res, "Lỗi ...", 500);
    }
}