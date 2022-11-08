import {Router} from 'express';
import productosRouter from './productos';



const MainRouter:Router = Router();

MainRouter.use('/productos', productosRouter);


export default MainRouter;