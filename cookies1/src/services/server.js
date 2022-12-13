import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mainRouter from '../routes';
import MongoStore from 'connect-mongo';
import path from 'path';
import {engine} from 'express-handlebars' 


const ttlSeconds = 180;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost/coderhouse',
    crypto: {
      secret: 'squirrel',
    },
  }),
  secret: 'shh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

const app = express();

const mySecret = 'mySecret';
app.use(cookieParser(mySecret));
app.use(express.static('public'));
app.use(express.json())
app.use(session(StoreOptions))
app.use(express.static(path.join(__dirname, '/public')));


const viewsFolderPath = path.resolve(__dirname, '../../views');
const layoutsFolderPath = `${viewsFolderPath}/layouts`;
const partialsFolderPath = `${viewsFolderPath}/partials`;
const defaultLayoutPath = `${layoutsFolderPath}/index.hbs`;

app.set('view engine', 'hbs');
app.set('views', viewsFolderPath);

app.engine('hbs', engine({
    layoutsDir: layoutsFolderPath,
	extname: 'hbs',
	defaultLayout: defaultLayoutPath,
    partialsDir: partialsFolderPath
}));


app.use('/api', mainRouter)

export default app