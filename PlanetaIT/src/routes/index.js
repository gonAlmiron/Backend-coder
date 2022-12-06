import {Router} from 'express';
import ingresosRouter from './ingresos';
import salidasRouter from './salidas';
import soporteRouter from './soporte';

 const router = Router()
 
 router.use('/ingresos', ingresosRouter);
 router.use('/salidas', salidasRouter);
 router.use('/soporte', soporteRouter);

 export default router