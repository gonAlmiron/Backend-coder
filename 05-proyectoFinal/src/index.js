import server from './services/server';
import {initDb} from './services/database'
import Config from './config';
import logger from './services/logger';

const PORT = process.env.PORT || Config.PUERTO

    const init = async () => {
        await initDb()
        server.listen(PORT, () => logger.info(`Escuchando en el puerto ${PORT} - PID WORKER ${process.pid} `))
    }
    
    init();