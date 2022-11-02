const express = require('express');
const ProductosRouter = require('./productos');
const { getWSServer } = require('../services/socket');

const router = express.Router();

router.get('/', (req, res) => {

    
})

router.use('/productos', ProductosRouter)

module.exports = router;
