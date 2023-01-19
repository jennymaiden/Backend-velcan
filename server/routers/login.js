/**
 * Controlador del login para usuar los Tokens de autenticacion
 */
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('./../models/Usuario');
const app = express();

//Crear peticiones POST
app.post('/login', function (req, res) {

     //Obtener el body que me envian
     let body = req.body;

     //Realizar la consulta a la base de datos
     Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
 
         if (err) {
             return res.status(400).json({
                 ok: false,
                 err
             });
         }
 
         if (!usuarioDB) {
             return res.status(400).json({
                 ok: false,
                 err: {
                     message: 'Usuario o contraseña incorrecta'
                 }
             });
         }
 
         //Evaluar la contraseña
         if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
             return res.status(400).json({
                 ok: false,
                 err: {
                     message: 'Usuario o contraseña incorrecta.'
                 }
             });
         }

         // Autenticacion exitosa
         res.json({
            ok: true,
            usuario: usuarioDB,
            token,
        })
    })
})

module.exports = app;