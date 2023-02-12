import passport from 'passport';
import logger from '../services/logger';
import UserAPI from '../api';


const passportOptions = { 
badRequestMessage: 'Falta username / password'
 };

export const getUserByName = (username) => UserAPI.findByName(username);

export const createUser = async (req, res, username, password) => {
  
  const newUser = await UserAPI.create(username, password);
  await CartAPI.create(newUser._id);
  return newUser;
};




export const signUpController = (req, res, next) => {
        

  try {
    passport.authenticate('signup', passportOptions, (req, res, err, user, info) => {


      logger.info(user)
      logger.info(`Se registró un usuario. Ruta /SIGNUP. Metogo POST`)
      
      res.json({ msg: 'signup OK' });

    })(req, res, next);
  } catch(err) {
    logger.info(err)
  }
        
      
     
      }


export const loginController = (req, res, next) => {
  
  try {
    passport.authenticate('login', passportOptions, (req, res, err, user, info) => {

      res.json({ msg: 'login OK', user });

    })(req, res, next);
  } catch(err) {
    logger.info(err)
  }
  
 
};
