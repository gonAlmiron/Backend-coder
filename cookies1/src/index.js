import server from './services/server';

const PORT = 3002;

server.listen(PORT, () => {
    console.log(`Server ON escuchando en el puerto ${PORT}`)
})

