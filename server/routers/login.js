/**
 * Controlador del login para usuar los Tokens de autenticacion
 */
const express = require('express');
const ControllerLogin = require('./../controller/ControllerLogin');
const app = express();

//Crear peticiones POST
app.post('/login', function (req, res) {

    //Obtener el body que me envian
    const body = req.body;
    ControllerLogin.getLogin(body, (err, result) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        
        if (result.length === 0) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o contraseña incorrecta'
                }
            });
        }

        res.json({
            ok: true,
            usuario: result
        })
       
    });
})

module.exports = app;