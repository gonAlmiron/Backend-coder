const express = require('express');
const ProductosRouter = require('./productos');
const { getWSServer } = require('../services/socket');

const router = express.Router();

router.get('/saludar', (req, res) => {

    const wsServer = getWSServer();
    console.log(wsServer);
    wsServer.emit('message', todosLosProductos);
    res.json({ msg: 'OK' });  //hasta ac es el endpoint normal

})

router.use('/productos', ProductosRouter)

module.exports = router;
