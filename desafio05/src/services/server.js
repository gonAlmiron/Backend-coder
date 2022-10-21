const express = require('express');
const app = express();
const path = require('path');
const {engine} = require ('express-handlebars');

app.use(express.static('public'));

app.engine('hbs', engine({
    layoutsDir: layoutsFolderPath,
	partialsDir: partialsFolderPath,
	extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');

const viewsFolderPath = path.resolve(__dirname, '../../views');
const layoutsFolderPath = `${viewsFolderPath}/layouts`;

app.get('/', (req, res => {
    res.json({
        msg: "ok"
})
}))




module.exports = app;