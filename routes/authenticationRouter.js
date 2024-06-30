const express = require("express");
const router = express.Router();

// Importamos el controlador de usuarios.
const authenticationController = require("../controllers/authenticationController.js"); 

//creamos la ruta
router.post("/register", authenticationController.register);
router.post("/login", authenticationController.login);

module.exports = router;