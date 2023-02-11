import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { UserModel } from '../models/user';
import logger from './logger'


const strategyOptions = {
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
};

const login = async (req, username, password, done) => {
 
    try {
    const user = await UserModel.findOne({username, password})

    if (!user) 
      return done(null, false, { mensaje: 'Usuario no encontrado' });

    const isValidPassword = await user.isValidPassword(password);

    if (!isValidPassword) {
      return done(null, false, { message: 'Invalid Username/Password' });
    }

    logger.info("ENCONTRE UN USUARIO", user)

    return done(null, user);  

    } catch(err) {
      logger.info(err);
      logger.info(err.stack)
    }

    
};



const signup = async (req, username, password, done) => {

    logger.info('SIGNUP!!');

    try {

      const {username, password} = req.body
      const newUser = await UserModel.create({username, password});

      logger.info(newUser)

      return done(null, newUser);

    } catch (err) {
      logger.info('Hubo un error!');
      logger.info(err);
      return done(null, false, { mensaje: 'Error Inesperado', err });
    }
};

export const loginFunc = new LocalStrategy(strategyOptions, login);
export const signUpFunc = new LocalStrategy(strategyOptions, signup);

 passport.serializeUser((user, done) => {
  logger.info('Se Ejecuta el serializeUser');
  done(null, user._id);
});


 passport.deserializeUser((userId, done) => {
  logger.info('Se Ejecuta el desserializeUser');
  UserModel.findById(userId).then((user) => {
    return done(null, user);
  })
});