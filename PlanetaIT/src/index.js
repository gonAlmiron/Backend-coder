import server from '../services/server'
import {initMongoDB} from '../services/database'


const init = async () => {
    await initMongoDB();

    const PORT = 8080

    server.listen(PORT, () => {
        console.log(`Server ONLINE escuchando en el puerto ${PORT}`)
    })

}