const fs = require('fs');
const path = require('path');

const express = require('express')

const app = express()

const PORT = 8080





class Producto {
    constructor (nombre, id, precio) {
        this.nombre = nombre,
        this.id = id,
        this.precio = precio

    }
}




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


const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

const limiteInferior = 1;
const limiteSuperior = 4;
const salida = {};

for(let i =0; i<1000; i++){
    const valor = between(limiteInferior,limiteSuperior);
  
    
}