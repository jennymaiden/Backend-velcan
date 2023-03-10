const mysql = require("mysql");
const db = require('./../config/dbConfig');

function getLogin(data, callback) {
    const sql = "Select * FROM usuarios where userName= ? and password= ?";
    db.query(mysql.format(sql,[data.userName, data.password] ), function(err, result) {
        callback(err, result);
    }); 
}
module.exports = {getLogin}