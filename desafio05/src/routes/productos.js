const express = require('express');
const productosController = require ('../controller/productos');

const router = express.Router();

router.post('/', (req, res) => {
    const body = req.body;

    const nuevoProducto = {
        nombre: body.nombre,
        img: body.img,
        precio: body.precio
    };

    productosController.save(nuevoProducto)

    res.redirect('/')
})

module.exports = router