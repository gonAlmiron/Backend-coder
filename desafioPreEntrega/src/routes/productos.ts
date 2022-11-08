import { Router, Request, Response, NextFunction } from "express";
const { ProductosController } = require('../controller/productos')
const productosRouter = Router();
import asyncHandler from "express-async-handler";

productosRouter.get('/', (req, res) => {
res.json({
    msg:  ProductosController.getAll()
})
})

productosRouter.get('/:id', (req, res) => {
    const id  = req.params.id;

    const product = ProductosController.getById(id)
    res.json({
        msg: product
    })
    
})

//metodo sin asyncHandler:

productosRouter.post('/', async (req, res, next) => {
    const body = req.body 
    try {

        const data = await ProductosController.save(body);
        res.json({
            msg: data
        })
    } catch (err) {
        next(err)
    }

});

//metodo con asyncHandler sin try/catch y sin next 
// SE ENGLOBA LA FUNCION DEL ROUTER.PUT EN PARENTESIS Y SE PONE AsyncHandler:

productosRouter.put('/:id', asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const { body } = req

    const data = await ProductosController.findByIdAndUpdate(id, body);
    res.json({
        msg: data
    })
}))

productosRouter.delete('/:id', (req, res) => {
    const id = req.params.id;


    res.json({
        msg: ProductosController.findByIdAndDelete(id)
    })
})

export default productosRouter;