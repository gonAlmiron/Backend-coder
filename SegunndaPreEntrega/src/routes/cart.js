import {Router} from 'express';
import {
    getAllCarts,
    getCartById,
    createCart,
    updateCart,
    deleteCart

} from '../controllers/cart'

const router = Router();

router.get('/', getAllCarts);

router.get('/:id', getCartById)

router.post('/', createCart)

router.put('/:id', updateCart)

router.delete('/:id', deleteCart)


export default router