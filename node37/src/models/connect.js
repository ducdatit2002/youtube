// khai báo chuỗi kết nối CSDL

import { Sequelize } from "sequelize";
import config from "../config/config.js";

const sequelize = new Sequelize(config.database, config.user, config.pass, {
    host: config.host,
    port: config.port,
    dialect: config.dialect // tên CSDL đang sử dụng
});

export default sequelize;

// try {
//     await sequelize.authenticate();
//     console.log("Kết nối thành công")
// } catch (err) {
//     console.log(err)
// }