const express = require('express')

const app = express()

const PORT = 8080



server.on('error', error => console.log(`Erro en servidor ${error}`))


app.get('/', (req, res) => {
    res.json({mensaje: 'hola mundo', ruta: 'pido la ruta principal'})
});

app.get('/productos', (req, rest) => {
    res.json({producto: 'Mouse Logitech', precio: 1000, id: 1})
});


const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);

});
