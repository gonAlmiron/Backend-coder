import server from './services/server'

const puerto = 8080;

server.listen(puerto, () => {
    console.log(`Servidor ON escuchando en el puerto ${puerto}`)
})