const server = require('./services/server')

const puerto = 8080;

server.listen(puerto, () => {
    console.log(`Servidor ONLINE en el puerto ${puerto}`)
});
