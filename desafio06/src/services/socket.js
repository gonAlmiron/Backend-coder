const socketIo = require('socket.io');
const productosController  = require('../controller/productos');

let io;

const initWsServer = (server) => {
  io = socketIo(server);

  io.on('connection',  (socket) => {

    console.log('Se acaba de conectar un cliente!')
    console.log('ID Socket SERVER', socket.id)
    console.log('ID Socket CLIENTE', socket.client.id)

    data =  productosController.getAll();
    socket.emit('todosLosProductos', data)

    socket.on('nuevoProducto'),  (data) => {
        productosController.save(data)
    }
   
  })
  return io
}

const getWSServer = () => {
    return io
}

module.exports = {
    initWsServer,
    getWSServer
}