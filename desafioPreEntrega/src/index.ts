import Server from './services/server'

const PORT = process.env.PORT || 8080

Server.listen(PORT, () => console.log(`Server UP en el puerto ${PORT}`));