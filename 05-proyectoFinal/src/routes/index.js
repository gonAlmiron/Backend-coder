import {Router} from 'express';
import passport from 'passport';
import log4js from 'log4js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: "Fetch desde el SERVIDOR / ROUTER"
    })
})


const passportOptions = { badRequestMessage: 'Falta username / password' };


router.post('/signup', (req, res, next) => {
  passport.authenticate('signup', passportOptions, (err, user, info) => {
    console.log('Info SIGNUP');
    console.log(err, user, info);
    if (err) {
      return next(err);
    }
    if (!user) return res.status(401).json(info);

    const logger = log4js.getLogger();

    logger.level = 'info';
  
    logger.info("Ruta /SIGNUP. Metogo POST")

    res.json({ msg: 'signup OK' });
  })(req, res, next);
});

router.post(
    '/login',
    passport.authenticate('login', passportOptions),
    (req, res) => {
  
      const logger = log4js.getLogger();
  
      logger.level = 'info';
    
      logger.info("Ruta /LOGIN. Metogo POST")

      res.json({
        msg: "LOGIN OK!"
      })
  
      
    },
  );




export default router;