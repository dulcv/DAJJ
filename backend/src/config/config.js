// Carga las variables de entorno 
require('dotenv').config();

// Exporta las variables de configuración
module.exports = {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  PORT: process.env.PORT || 3000
};