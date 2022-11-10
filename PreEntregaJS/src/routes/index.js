const { Router } = require('express');
const ProductosRouter = require ('./productos')
const CarritoRouter = require ('./carrito')


const router = Router();

router.get('/', (req, res) => {
    res.json({
        msj: 'ok router'
    })
})

router.use('/productos', ProductosRouter);
router.use('/carrito', CarritoRouter);


module.exports = router;