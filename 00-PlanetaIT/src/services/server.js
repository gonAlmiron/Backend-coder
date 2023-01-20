import express from 'express';
import cors from 'cors'
import MongoStore from 'connect-mongo';
import Config from '../config';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import mainRouter from '../routes';

const ttlSeconds = 180;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: Config.MONGO_ATLAS_URL,
    // crypto: {
    //   secret: 'squirrel',
    // },
  }),
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

const app = express()
const mySecret = 'mySecret';
app.use(session(StoreOptions));
app.use(cookieParser(mySecret));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/api', mainRouter);

export default app