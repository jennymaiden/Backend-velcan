/**
 * Controlador de crud de usuarios
 */
const express = require('express');
const Usuario = require('./../models/Usuario');
const app = express();

// Peticion GET para consultar los usuarios
app.get('/usuarios', function(req, res) {

    Usuario.find( 'nombre email role estado google img')
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Usuario.count( (err, conteo) => {
                res.json({
                    ok: true,
                    usuarios,
                    cuantos: conteo
                })

            });

        })
        //res.json('get usuario')
});

module.exports = app;