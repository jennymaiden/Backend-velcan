/**
 * Definicion de todas las rutas de los controladores
 * 
 */
const express = require('express')
const app = express();

app.use(require('./login'));
app.use(require('./usuarios.js'));

module.exports = app;