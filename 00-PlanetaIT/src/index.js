import server from './services/server';

const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
    console.log(`Servidor ON escuchando en puerto ${PORT}`)
})