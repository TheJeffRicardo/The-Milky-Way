require('dotenv').config();
let { createPool } = require('mysql');
//create connection variable

var connection = createPool({
    host: process.env.DBHost,
    user: process.env.DBUser,
    password: process.env.DBPassword,
    database: process.env.DBName,
    port: process.env.DBPort,
    multipleStatements: true
});


module.exports = connection;