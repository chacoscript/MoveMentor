/**
 * Configuración de conexión a MongoDB
 * -----------------------------------
 * Este archivo establece la conexión
 * entre la aplicación y MongoDB Atlas.
 */
const mongoose = require("mongoose");

/**
 * Función para conectar MongoDB
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("🟢 MongoDB conectado");
  } catch (error) {
    console.error("🔴 Error al conectar DB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;