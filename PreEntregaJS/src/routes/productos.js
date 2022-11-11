const { Router } = require('express');
const { ProductosController } = require('../controller/productos')
const AsyncHandler = require('express-async-handler')
const fs = require('fs/promises');
const path = require('path');

const filePath = path.resolve(__dirname, '../productos.json')
const fileData = fs.readFile( filePath, 'utf-8')

const router = Router();

router.get('/', (req, res) => {
	res.json({
		msg: ProductosController.getAll()
	})
})

router.get('/:id', (req, res) => {
	const id = req.params.id;

	const product = ProductosController.getById(id)
	res.json({
		msg: product
		})
    })
//metodo sin asyncHandler:
router.post('/',  async (req, res, next) => {
    const body = req.body 
    const fileData = await fs.readFile( filePath, 'utf-8')
    const productos = JSON.parse(fileData)

    let id = 1;
        
    if(productos.length){	//Si tengo elementos en mi array
        id = productos[productos.length -1].id + 1
    }

    const nuevoProducto = {
        title:body.title,
        price: body.price,
        id: id
    };

  

    ProductosController.save(nuevoProducto)
    await fs.writeFile(filePath, JSON.stringify(productos))
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