const mysql = require('mysql');

const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'educdb'
});

module.exports = dbConnect;