require('./config/config');
require("dotenv").config;
const express = require('express')
const app = express()
const mysql = require('mysql');
const bodyParser = require('body-parser')
const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// Configuracion global de rutas
app.use(require('./routers/index'));

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
})