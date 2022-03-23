const mysql = require('mysql');

const dbConnect = mysql.createConnection({
    host: '192.168.64.2',
    user: 'test',
    password: '12345',
    database: 'educdb'
});

module.exports = dbConnect;