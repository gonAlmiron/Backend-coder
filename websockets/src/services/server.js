const express = require('express');
const http = require('http');
const io = require('socket.io');

const app = express();

app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.json({
        msj: 'ok'
    })
});


const myHTTPServer = http.Server(app)

const myWebSocketServer = io(myHTTPServer)

myWebSocketServer.on('connection', (socket  ) => {
    console.log("Se acaba de conectar un cliente")
}) //cuando se cumple el evento Connection, se ejecuta una funcion
    // el socket de parametro es como un (req, res) todo junto

module.exports = myHTTPServer;