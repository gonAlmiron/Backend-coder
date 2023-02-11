import {Router} from 'express';
import { gmailController } from '../controllers/gmail.js';
import { signUpController, loginController } from '../controllers/users.js';
import { inboxController, wppController } from '../controllers/whatsapp.js';

const router = Router();

router.get('/', (req, res) => {
     res.json({
        message: "Fetch desde el SERVIDOR / ROUTER"
    })
})

router.post('/signup', signUpController);

router.post('/login', loginController)

router.post('/gmail', gmailController)

router.post('/whatsapp', wppController); 

router.post('/inbox', inboxController); 



export default router;