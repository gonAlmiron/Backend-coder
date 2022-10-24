const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();



app.use(express.static('public'));

const viewsFolderPath = path.resolve(__dirname, '../../views');
const layoutsFolderPath = `${viewsFolderPath}/layouts`;


app.set('view engine', 'hbs');
app.set('views', viewsFolderPath);

app.engine('hbs', engine({
    layoutsDir: layoutsFolderPath,
	extname: 'hbs'
}));



app.get('/test', (req, res) => {
	res.json({
		msg: 'ok'
	})
})

app.get('/', (req, res) => {
	res.render('main', {layout: 'index'})
})

app.get('/productos', (req, res) => {
	res.render('productos', {layout: 'index'})
})



module.exports = app;