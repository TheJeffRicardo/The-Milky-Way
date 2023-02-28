require('dotenv').config();
const { createPool } = require('mysql');
//create connection variable

var connection = createPool({
    host: process.env.DBHost,
    user: process.env.DBUser,
    password: process.env.DBpassword,
    database: process.env.DBName,
    port: process.env.DBPort,
    multipleStatements: true
});


module.exports = connection;