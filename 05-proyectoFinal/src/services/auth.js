import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { UserModel } from '../models/user';
import logger from './logger'
import {
  getUserByName,
  createUser,
} from '../controllers/users';


const strategyOptions = {
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
};

const login = async (req, username, password, done) => {

  const user = await getUserByName(username)

  if (!user) 
    return done(null, false, { mensaje: 'Usuario no encontrado' });

  const isValidPassword = await user.isValidPassword(password);

  if (!isValidPassword) {
    return done(null, false, { message: 'Invalid Username/Password' });
  }

  logger.info("ENCONTRE UN USUARIO", user)

  return done(null, user);
};

const signup = async (req, username, password, done) => {


  logger.info('SIGNUP!!');

  try {
    const {username, password} = req.body
    const newUser = await createUser({username, password});

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



/**
 * Express-session crea un objeto session en la request
 * passport agrega a req.session un objeto llamado passport para guardar la info del usuario
 * Cuando llamamos a done en login o en signup y pasamos el usuario lo siguiente que ocurre es que se ejecuta passport.serializeUser
 * Esta funcion agarra el usuario que recibio y lo guarda en req.session.passport 
 * En este caso estamos creando una key llamado user con la info del usuario dentro de req.session.passport
 */
 passport.serializeUser((user, done) => {
  logger.info('Se Ejecuta el serializeUser');
  done(null, user._id);
});

/**
 * DeserializeUser Permite tomar la info que mandamos con el serializeUser para hacer algun extra de busqueda de informacion
 */
 passport.deserializeUser((userId, done) => {
  logger.info('Se Ejecuta el desserializeUser');
  UserModel.findById(userId).then((user) => {
    return done(null, user);
  })
});