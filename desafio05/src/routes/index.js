const express = require('express');
const ProductosRouter = require('./productos');
const router = express();

router.use('/productos', ProductosRouter);

module.exports = router;