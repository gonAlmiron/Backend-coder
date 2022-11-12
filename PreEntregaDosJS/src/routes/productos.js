const {Router} = require('express');
const {ProductosController} = require('../controller/productos')
const asyncHandler = require('express-async-handler')

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

router.post('/', asyncHandler(async  (req, res) => {
	const { body }  = req

		const data = await ProductosController.save(body);
		res.json({
			msg: data
		})

}))

router.put('/:id', asyncHandler (async (req, res) => {
    const id = req.params.id;
	const { body }  = req
        const data = await ProductosController.getByIdAndUpdate(id, body);

        res.json({
            msg:  data
        })
    }))
   


router.delete('/:id', asyncHandler ( async (req, res) => {
    const id = req.params.id;
    const data = await ProductosController.getByIdAndDelete(id)
    
    res.json({
        msg: data
    })
}));


module.exports = router