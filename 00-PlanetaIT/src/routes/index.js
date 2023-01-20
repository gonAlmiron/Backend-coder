import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: "Hola desde el SERVIDOR ROUTER"
    })
})

router.post('/ingresos', (req, res) => {

    let {nombre, telefono, descripcion, fecha, numOrden} = req.body
    



})

router.get('/ingresos', (req, res) => {

    res.json({
        message: "ok"
    })


})

export default router;