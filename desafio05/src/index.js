const server = require('./services/server');

const puerto = 5000;

server.listen(puerto, () => {
    console.log(`El servidor esta listo para escuchar en el puerto ${puerto}`)
});

