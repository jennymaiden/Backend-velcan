/**
 * Puerto
 */
process.env.PORT = process.env.PORT || 3000;

/**
 * Entorno
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * Base de datos
 */
process.env.JAWSDB_URL='mysql://lvma614dmwbt85v7:zppm4hysxmnz2zxp@en1ehf30yom7txe7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/m7zujshvs1rmr4rb'

/**
 * Fecha de expiracion del token
 * 60 Segundos
 * 60 minutos
 * 24 horas
 * 30 días
 */
process.env.CADUCIDAD_TOKEN = '48h';

/***
 * SEDD de autenticacion
 */
process.env.SEDD = process.env.SEDD || 'mi-llave-secreta-desarrollo';