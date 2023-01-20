import {Router} from 'express';
import { IngresoModel } from '../models/ingreso';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: "Hola desde el SERVIDOR ROUTER"
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
                msg: "POST OK!",
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

        const data = await IngresoModel.find()
    
        res.json({
            message: "ok",
            data: data
        })

    } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    }) 
    } 
})

export default router;