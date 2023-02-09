import passport from 'passport';
import logger from '../services/logger';

const passportOptions = { 
badRequestMessage: 'Falta username / password'
 };

// export const getUserByName = (username) => UserAPI.findByName(username);

// export const createUser = async (req, res, username, password) => {
  
//   const newUser = await UserAPI.create(username, password);
//   await CartAPI.create(newUser._id);
//   return newUser;
// };


export const signUpController = async (req, res, next) => {
        await passport.authenticate('signup', passportOptions, (err, user, info) => {

          if (err) {
            return next(err);
          }
          if (!user) return res.status(401).json(info);

          logger.info(user)
          logger.info(`Se registró un usuario. Ruta /SIGNUP. Metogo POST`)
      
          res.json({ msg: 'signup OK' });
        })(req, res, next);
      }


export const loginController = async (req, res) => {
  
  await passport.authenticate('login', passportOptions)

  logger.info("Se logeó un usuario. Ruta /LOGIN. Metogo POST")

  res.json({
    msg: "LOGIN OK!"
  })
}