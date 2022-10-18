const { Router } = require('express');
const ProductosRouter = require('./productos')

const router = Router();

router.use('/products', ProductosRouter)

module.exports = router;