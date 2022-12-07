import express from 'express'
import mainRouter from '../routes/index'
import http from 'http';
import {engine} from 'express-handlebars' 
import path from 'path'

const app = express()

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

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

app.get('/', (req, res) => {
    res.json({msg: "ok"})
})

app.use(function (err, req, res, next) {
    return res.status('500').json({
        msg: 'There was an unexpected error',
        error: err.message
    });
}); 


const httpServer = http.Server(app)

export default httpServer