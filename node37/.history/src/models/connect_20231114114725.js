import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("db_youtube", "root", "1234", {
    host: 'localhost',
    port: "3307",
    dialect: "mysql",
});
try { 
    await sequelize.authenticate();
    console.log("Kết nối thành công");
} catch(err) {
    
}


