import passport from 'passport';
import log4js from 'log4js';

const passportOptions = { 
badRequestMessage: 'Falta username / password'
 };

export const signUpController = async (req, res, next) => {
        await passport.authenticate('signup', passportOptions, (err, user, info) => {

          if (err) {
            return next(err);
          }
          if (!user) return res.status(401).json(info);
    
          
      
          logger.level = 'info';
          
          logger.info(user)
          logger.info(`Se registró un usuario. Ruta /SIGNUP. Metogo POST`)
      
          res.json({ msg: 'signup OK' });
        })(req, res, next);
      }



export const loginController = async (req, res) => {
  
  await passport.authenticate('login', passportOptions)
  const logger = log4js.getLogger();

  logger.level = 'info';

  logger.info("Se logeó un usuario. Ruta /LOGIN. Metogo POST")


  res.json({
    msg: "LOGIN OK!"
  })

  
}