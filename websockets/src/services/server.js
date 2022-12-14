const express = require('express');
const http = require('http');
const io = require('socket.io');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.json({
        msj: 'ok'
    })
});


const myHTTPServer = http.Server(app)

const myWebSocketServer = io(myHTTPServer)

myWebSocketServer.on('connection', (socket) => {
    console.log("Se acaba de conectar un cliente")
    console.log('ID SOCKET SERVER', socket.id);
    console.log('ID SOCKET CLIENTE', socket.client.id);

    socket.on('nombreDeEvento', (dataRecibida) => {
        
    console.log(`El cliente ${socket.client.id} acaba de mandar un mensaje de tipo nombreDeEvento`)
    console.log(dataRecibida)
    socket.emit('respuesta', {recibido: 'ok'})
    socket.emit('notificacionPersonal', {msg: 'Bienvenido al chat!'});
  
})



	// socket.on('nombreDeEventoSuperLindo', (dataRecibida) => {
	// 	console.log(`El cliente ${socket.client.id } Me acaban de mandar un mensaje del tipo nombreDeEventoSuperLindo`);
	// 	console.log(dataRecibida);

	// });

}) //cuando se cumple el evento Connection, se ejecuta una funcion
    // el socket de parametro es como un (req, res) todo junto


//     setInterval(() => {
// 	myWebSocketServer.emit('notificacionGeneral', { data: new Date(), capacidadMontanaRusa: Math.random() });
// }, 1000)

module.exports = myHTTPServer;