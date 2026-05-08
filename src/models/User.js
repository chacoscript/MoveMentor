/**
 * Modelo User
 * -----------------------------
 * Representa a los usuarios
 * del sistema:
 * - estudiantes
 * - instructores
 */

const mongoose = require("mongoose");

/**
 * Esquema de usuario
 */

const userSchema = new mongoose.Schema({
  
  /**
     * Nombre completo del usuario
     */ 
  name: {
    type: String,
    required: true
  },
  /**
     * Correo electrónico único
     */

  email: {
    type: String,
    required: true,
    unique: true
  },
  /**
     * Contraseña encriptada
     */
  password: {
    type: String,
    required: true
  },
    /**
     * Rol del usuario
     */
  role: {
    type: String,
    enum: ["student", "instructor"],
    default: "student"
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);