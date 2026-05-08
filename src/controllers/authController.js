/**
 * Controlador de autenticación
 * ----------------------------
 * Maneja:
 * - registro
 * - login
 */

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * Registro de usuario
 */
const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // verificar si existe
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "El usuario ya existe",
      });
    }

    // encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // crear usuario
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    res.status(201).json({
      message: "Usuario registrado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error,
    });
  }
};

/**
 * Login de usuario
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // buscar usuario
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Usuario no encontrado",
      });
    }

    // comparar contraseña
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Contraseña incorrecta",
      });
    }

    // generar token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login exitoso",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {

  console.log(error);

  res.status(500).json({
    message: "Error en el servidor",
    error: error.message
  });

}
};

module.exports = {
  register,
  login,
};