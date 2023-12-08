// khai báo chuỗi kết nối CSDL

// const connect = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     port: "3306",
//     database: "db_youtube"
// });

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_youtube", "root", "1234", {
    host: "localhost",
    port: "3307",
    dialect: "mysql" // tên CSDL đang sử dụng
});

export default sequelize;

// try {
//     await sequelize.authenticate();
//     console.log("Kết nối thành công")
// } catch (err) {
//     console.log(err)
// }