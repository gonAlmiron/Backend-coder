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

module.exports = myHTTPServer;