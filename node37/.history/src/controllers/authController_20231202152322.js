import { responseData } from "../config/Response";

export const login = () => {

}

export const signUp = () => {
    try {
        let { fullName, email, password} = res.body;

        let newData = {
            full_name: fullName,
            email: email,
            pass_word: pass_word,
        }
        //thêm mới users => creates
    } catch {
        responseData(res, "Lỗi ...", 500);
    }
}