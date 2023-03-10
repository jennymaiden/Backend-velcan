/**
 * Controlador de crud de usuarios
 */
const express = require('express');

const ControllerUsuer = require('./../controller/ControllerUsuario');
const app = express();

// Peticion GET para consultar los usuarios
app.get('/usuarios', function (req, res) {

    ControllerUsuer.getUsuarios((result) => {
        res.json(result);
    });
});

// Peticion POST para agregar los usuarios
app.post("/usuarios", (req, res) => {
    const user = {
        nombreCompleto: req.body.nombre,
        userName: req.body.userName,
        password: req.body.password,
        direccion: req.body.direccion,
        telefono: req.body.telefono
      };

    ControllerUsuer.insert(
        user,
        (result) => {
            res.json(result);
        }
    );
});
module.exports = app;