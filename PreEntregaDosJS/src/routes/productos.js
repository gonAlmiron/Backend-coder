const {Router} = require('express');
const {ProductosController} = require('../controller/productos')

const router = Router();

router.get('/', (req, res) => {

    res.json({
        msg: ProductosController.getAll()
    })
});

router.get('/:id', (req, res) => {

        const id = req.params.id

        const product = ProductosController.getById(id)
    
        res.json({
            msg:  product
        })
});

router.post('/', (req, res) => {
    res.json({
        msg: ProductosController.save()
    })
});

router.put('/:id', (req, res) => {
    res.json({
        msg:  ProductosController.getByIdAndUpdate()
    })
});

router.delete('/:id', (req, res) => {
    res.json({
        msg: ProductosController.getByIdAndDelete()
    })
});


module.exports = router