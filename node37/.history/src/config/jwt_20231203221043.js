// yarn add jsonwebtoken

import { Jwt } from "jsonwebtoken";

export const createToken = (data) => {
    let token = jwt.sign({ data }, "BIMAT", { algorithm: "HS256"})
    return token;
}

export const checkToken = (data) => {

}

export const decodeToken = () => {

}