import server from './services/server'
import {initDb} from './services/db'
import Config from './config/index'


const init = async () => {
    await initDb()
    server.listen(Config.PUERTO, () => console.log(`Escuchando en el puerto ${Config.PUERTO}`))
}

init();