const express = require('express');
const ProductosRouter = require('./productos');
// const { getWSServer } = require('../services/socket');

const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true}))

router.use('/productos', ProductosRouter)

module.exports = router;
