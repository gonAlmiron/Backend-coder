const server = require('./services/server.js')

const PORT = env.process.PORT || 8080

server.listen(PORT, () => {
    console.log(`Server UP en el puerto ${PORT}` )
}
)