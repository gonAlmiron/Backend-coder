import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import mainRouter from '../routes';

const FileStore = sessionFileStore(session)

const fileStoreOptions = {

  store: new FileStore({ 
    path: './sesiones',      
    ttl: 100,         
    retries: 0,              
    reapInterval: 10,   
  }),
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 100 * 1000,
  }
};

const app = express();

const mySecret = 'mySecret';
app.use(cookieParser(mySecret));
app.use(express.json())
app.use(session(fileStoreOptions))

app.use('/api', mainRouter)

export default app