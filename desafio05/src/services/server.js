const express = require('express');
const { engine } = require('express-handlebars');
const { partials } = require('handlebars');
const path = require('path');
const mainRouter = require('../routes/index');
const app = express();
const productosController = require('../controller/productos');


app.use(express.static('public'));

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

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api', mainRouter)

module.exports = app