import express from 'express';
import cors from 'cors'
import MongoStore from 'connect-mongo';
import Config from '../config';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import mainRouter from '../routes';
import { loginFunc, signUpFunc } from './auth';
import passport from 'passport';
import logger from './logger';


const app = express()
app.use(express.json())

const ttlSeconds = 1800;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: Config.MONGO_ATLAS_URL,
    crypto: {
      secret: 'squirrel',
    },
  }),
  secret: 'shhhhhh',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

app.use(session(StoreOptions));

const mySecret = 'mySecret';

app.use(cookieParser(mySecret));

app.use(express.urlencoded({extended: true}))

app.use(cors())

app.use('/api', mainRouter);


//Indicamos que vamos a usar passport en todas nuestras rutas
app.use(passport.initialize());

//Permitimos que passport pueda manipular las sessiones de nuestra app
app.use(passport.session());

// Cuando un usuario se autentique correctamente, passport va a devolver en la session la info del usuario
passport.use('login', loginFunc);

//signUpFunc va a ser una funcion que vamos a crear y va a tener la logica de registro de nuevos usuarios
passport.use('signup', signUpFunc);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({error: 'an error occurred'});
});

export default app