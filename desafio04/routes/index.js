const { Router } = require('express');
const ProductosRouter = require('./productos')

const router = Router();

router.use('/productos', ProductosRouter)

module.exports = router;