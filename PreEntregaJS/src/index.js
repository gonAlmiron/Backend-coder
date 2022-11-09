const server = require('./services/server')

const PORT = process.env.PORT || 8080;

server.listen( PORT, () => console.log(`Server ON escuchando en el puerto ${PORT}`))

