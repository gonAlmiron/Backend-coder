const server = require('./services/server')

const puerto = 2000

server.listen(puerto, () => {
    console.log(`Server ON escuchando en el puerto ${puerto}`)
})