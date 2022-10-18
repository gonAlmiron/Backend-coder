const { Router } = require('express');
const { ProductosController } = require('../controller/productos')
const router = Router();
const AsyncHandler = require('express-async-handler')

router.get('/', (req, res) => {
res.json({
    msj:  ProductosController.getAll()
})
})

router.get('/:id', (req, res) => {
    const id  = req.params.id;

    const product = ProductosController.getById(id)
    res.json({
        msj: product
    })
    
})

//metodo sin asyncHandler
router.post('/', async (req, res, next) => {
    const body = req.body 
    try {

        const data = await ProductosController.save(req.body);
        res.json({
            msj: data
        })
    } catch (err) {
        next(err)
    }
});

//metodo con asyncHandler sin try/catch y sin next 
// SE ENGLOBA LA FUNCION DEL ROUTER.PUT EN PARENTESIS Y SE PONE AsyncHandler
router.put('/:id', AsyncHandler(async (req, res) => {
    const data = await ProductosController.save();
    res.json({
        msj: data
    })
}))

router.delete('/:id', (req, res) => {
    res.json({
        msj: ProductosController.findByIdAndDelete()
    })
})

module.exports = router;