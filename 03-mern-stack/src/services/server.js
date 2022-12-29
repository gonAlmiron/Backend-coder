import express from 'express';
import path from 'path'
import mainRouter from '../routes/task.routes';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import Config from '../config';
import session from 'express-session';

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

const app = express();
const mySecret = 'mySecret';

app.use(cookieParser(mySecret));


app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));;

app.use(session(StoreOptions));


app.use('/api', mainRouter);

export default app