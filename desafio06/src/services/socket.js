const socketIo = require('socket.io');
const  productosController  = require('../controller/productos');

let io;

const initWsServer = (server) => {
  io = socketIo(server);

  io.on('connection', async (socket) => {

    data = await productosController.getAll();
    socket.emit('todosLosProductos', data)

    socket.on('nuevoProducto'), async (data) => {
        await productosController.save(data)
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