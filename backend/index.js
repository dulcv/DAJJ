const mongoose = require("mongoose");
const app = require("./app");

// Importa las variables de entorno 
const { DB_HOST, DB_USER, DB_PASSWORD, PORT } = require("./src/config/config");
console.log(DB_HOST, DB_USER, DB_PASSWORD);

// Construye la URI de conexión a MongoDB
const mongoDbUri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}?retryWrites=true&w=majority&appName=Cluster0`;

// Función principal que conecta a la base de datos y levanta el servidor Express
async function start() {
    try {
        await mongoose.connect(mongoDbUri);
        app.listen(PORT, () => console.log("Escuchando el puerto", PORT));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();