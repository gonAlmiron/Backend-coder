const { Router } = require('express');
const { ProductosController } = require('../controller/productos')
const router = Router();
const AsyncHandler = require('express-async-handler')
const uuidv4 = require('uuidv4')

router.get('/', (req, res) => {
res.json({
    msg:  ProductosController.getAll()
})
})

router.get('/:id', (req, res) => {
    const id  = req.params.id;
    const product = ProductosController.getById(id)
    res.json({
        msg: product
    })
    
})

//metodo sin asyncHandler:
router.post('/',  (req, res, next) => {
    const body = req.body 
 
    const nuevoProducto = {
        title:body.title,
        price: body.price,
        id: 4
    };

    ProductosController.save(nuevoProducto)

    try {

        const data =  ProductosController.save(body);
        res.json({
            msg: data
        })
    } catch (err) {
        next(err)
    }

});

//metodo con asyncHandler sin try/catch y sin next 
// SE ENGLOBA LA FUNCION DEL ROUTER.PUT EN PARENTESIS Y SE PONE AsyncHandler:

router.put('/:id', AsyncHandler(async (req, res) => {
    const id = req.params.id;
    const { body } = req

    const data = await ProductosController.findByIdAndUpdate(id, body);
    res.json({
        msg: data
    })
}))

router.delete('/:id', (req, res) => {
    const id = req.params.id;


    res.json({
        msg: ProductosController.findByIdAndDelete(id)
    })
})

module.exports = router;