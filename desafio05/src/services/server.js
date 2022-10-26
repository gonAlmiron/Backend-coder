const express = require('express');
const { engine } = require('express-handlebars');
const { partials } = require('handlebars');
const path = require('path');
const app = express();



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


// nombre: poner un ID al input form y luego va el INPUTFORM1.value
// despues hay que hacer un += para sumarlo a la lista
// armar una base de la lista
app.get('/test', (req, res) => {
	const objetoConDataDinamica = {
		nombre: 'Carlitos',
		apellido: 'Tevez'
	}
	res.json({
		msg: 'ok'
	})
})

app.get('/', (req, res) => {
	const objetoConDataDinamica = {
		nombre: "Ricardo",
		apellido: "Bochini",
		productos: ["Mate", "Cafe", "Harina","Palmitos"],
		productoss: [{
			nombre: 'mate', estilo: 'toplaner',
			nombre: 'cafe', estilo: 'midlaner',
			nombre: 'harina', estilo: 'toplaner',
			nombre: 'palmitos', estilo: 'midlaner',
		}],
		mostrarProductos: true
	};
	res.render('main', objetoConDataDinamica)
})

app.get('/productos', (req, res) => {
	res.render('productos', {layout: 'index'})
})





module.exports = app;