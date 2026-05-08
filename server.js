require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");

const app = express();

app.use(express.json());

// conectar DB
connectDB();

// ruta prueba
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});