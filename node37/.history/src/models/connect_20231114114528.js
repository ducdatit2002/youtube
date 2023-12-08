import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("db_youtube", "root");




import mysql from 'mysql2';
const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    port: "3307",
    database: "db_youtube"
});