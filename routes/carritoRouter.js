const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

// Ruta para realizar una compra
router.post('/comprar', carritoController.realizarCompra);

module.exports = router;
