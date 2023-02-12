import {Router} from 'express';
import { gmailController } from '../controllers/gmail.js';
import { inboxController, wppController } from '../controllers/whatsapp.js';
import passport from 'passport';
import logger from '../services/logger.js';
import { passportOptions } from '../services/auth.js';

const router = Router();



router.get('/', (req, res) => {
     res.json({
        message: "Fetch desde el SERVIDOR / ROUTER"
    })
})

router.post('/signup', (req, res, next) => {
    passport.authenticate('signup', passportOptions, (err, user, info) => {
      console.log('Info SIGNUP');
      console.log(err, user, info);
      if (err) {
        return next(err);
      }
      if (!user) return res.status(401).json(info);
  
    
      logger.info(`Se registró un usuario: ${user.username} \n\n. Ruta /SIGNUP. Metogo POST`)
  
      res.json({ msg: 'signup OK' });
    })(req, res, next);
  });

  router.post('/login', passport.authenticate('login', passportOptions), (req, res, user) => {
      logger.info(`Se loge{o} un usuario. Ruta /LOGIN. Metogo POST`)
      res.json( {
        msg: `Login OK!!`
      })
    },
  );

router.post('/gmail', gmailController)

router.post('/whatsapp', wppController); 

router.post('/inbox', inboxController); 



export default router;