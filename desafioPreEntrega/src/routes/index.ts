import {Router} from 'express';

import productosRouter from './productos';


const router = Router();

router.use('/productos', productosRouter);


export default router;