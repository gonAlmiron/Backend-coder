import server from './services/server'

const PORT = 8080

server.listen(PORT, () => {
  console.log(`servidor ON escuchando en puerto ${PORT}`)
})