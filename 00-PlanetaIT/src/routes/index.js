import {Router} from 'express';
import { IngresoModel } from '../models/ingreso';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: "Fetch desde el SERVIDOR / ROUTER"
    })
})

router.post('/ingresos', async (req, res) => {

    try {
        
            let {nombre, telefono, descripcion, fecha, numOrden} = req.body
        
            const newIngreso = await IngresoModel.create({
                nombre, 
                telefono, 
                descripcion, 
                fecha, 
                numOrden
            })
        
            res.json({
                data: newIngreso
            })

    } catch (err) {
        res.status(500).json({
          error: err.message,
          stack: err.stack,
        }) 
}})

router.get('/ingresos', async (req, res) => {
    try {

        const ingresos = await IngresoModel.find()
    
        res.json({
            ingresos
        })

    } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    }) 
    } 
})

router.delete('/ingresos/:id', async (req, res) => {

    try {
        const {id} = req.params;
        await IngresoModel.findByIdAndDelete(id)

        res.json({
            msg: "Ingreso borrado"
        })

    } catch (err) {
        res.status(500).json({
          error: err.message,
          stack: err.stack,
        }) 
        } 

})

export default router;