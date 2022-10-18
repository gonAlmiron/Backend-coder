const { Router } = require('express');
const { ProductosController } = require('../controller/productos')
const router = Router();

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

router.post('/', (req, res) => {
    res.json({
        msj: ProductosController.save()
    })
});

router.put('/:id', (req, res) => {
    res.json({
        msj: ProductosController.findByIdAndUpdate()
    })
})

router.delete('/:id', (req, res) => {
    res.json({
        msj: ProductosController.findByIdAndDelete()
    })
})

module.exports = router;