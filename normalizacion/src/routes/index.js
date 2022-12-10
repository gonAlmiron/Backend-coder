import {Router} from 'express';
import {
    getAllProducts,
    getAllMessages,
    createMessage
} from '../controllers/productos'


 const router = Router()

 router.get('/products', getAllProducts);

 router.get('/messages', getAllMessages);

 router.post('newMessage', createMessage);


 export default router