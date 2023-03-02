require('dotenv').config();
const { createPool } = require('mysql');
//create connection variable

const connection = createPool({
    host: process.env.DBHost,
    user: process.env.DBUser,
    password: process.env.DBPassword,
    database: process.env.DBName,
    port: process.env.DBPort,
    multipleStatements: true
});


module.exports = connection;