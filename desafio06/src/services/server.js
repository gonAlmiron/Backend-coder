const express = require('express');
const { engine } = require('express-handlebars');
const { partials } = require('handlebars');
const http = require('http');
const path = require('path')
const mainRouter = require('../routes');
const io = require('socket.io');
const productosController = require('../controller/productos');
const { initWsServer } = require('./socket');

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



app.get('/', (req, res) => {
	const productos = productosController.getAll();
	res.render('main', { productos } )
})


const server = http.Server(app);

const myWebSocketServer = io(server);




app.use('/api', mainRouter)


module.exports = server;