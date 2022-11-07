import {Router} from 'express';
import ProductosRouter from './productos';
import CarritoRouter from './carrito';


const router = Router();

router.use('/productos', ProductosRouter);
router.use('/carrito', CarritoRouter);


export default router;