const { Router } = require('express');
const { CarritoController } = require('../controller/carrito')
const router = Router();
const AsyncHandler = require('express-async-handler')
const uuidv4 = require('uuidv4')

router.get('/', (req, res) => {
res.json({
    msg:  CarritosController.getAll()
})
})

router.get('/:id', (req, res) => {
    const id  = req.params.id;
    const product = CarritoController.getById(id)
    res.json({
        msg: product
    })
    
})


router.post('/', async (req, res, next) => {
    const body = req.body 

    try {

        
        const nuevoProducto = {
            title: body.title,
            price: body.price,
            id: 3
        }
        CarritoController.save(nuevoProducto);

        res.json({
            msg: nuevoProducto
        })

    } catch (err) {
        next(err)
    }

});


router.put('/:id', AsyncHandler(async (req, res) => {
    const id = req.params.id;
    const { body } = req

    const data = await CarritoController.findByIdAndUpdate(id, body);
    res.json({
        msg: data
    })
}))

router.delete('/:id', (req, res) => {
    const id = req.params.id;


    res.json({
        msg: CarritoController.findByIdAndDelete(id)
    })
})

module.exports = router;