const mysql = require("mysql");
const db = require('./../config/dbConfig');

function insert(data, callback) {
    const insertQuery = "INSERT INTO usuarios (nombreCompleto, userName, password, direccion, telefono) VALUES (?, ?, ?, ?, ?)";
    const sql = mysql.format(insertQuery, [data.nombreCompleto, data.userName, data.password, data.direccion, data.telefono]);
    db.query(sql, function (err, result) {
        if (err) throw err;
        callback(result);
    });
}

function getUsuarios(callback) {
    const selectQuery = "SELECT * FROM usuarios";

    db.query(selectQuery, function (err, result) {
        if (err) throw err;
        callback(result);
    });
}

module.exports = { insert, getUsuarios }