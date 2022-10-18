const server = require('./services/server');

const puerto = 8080

server.listen(puerto, () => {
    console.log(`El servidor esta listo para escuchar en el puerto ${puerto}`)
});

