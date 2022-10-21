const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();



app.use(express.static('public'));

const viewsFolderPath = path.resolve(__dirname, '../../views');
const layoutsFolderPath = `${viewsFolderPath}/layouts`;


app.engine('hbs', engine({
    layoutsDir: layoutsFolderPath,
	extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');



app.get('/', (req, res) => {
	res.json({
		msg: 'ok'
	})
})



module.exports = app;