/**
 * Archivo principal del servidor
 * --------------------------------
 * Inicializa Express,
 * conecta la base de datos
 * y levanta la API.
 */
require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");

const app = express();

/**
 * Middleware para interpretar JSON
 */

app.use(express.json());

// conectar MongoDB
connectDB();

// ruta base prueba
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

const PORT = process.env.PORT || 3000;

/**
 * Inicialización del servidor
 */
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});