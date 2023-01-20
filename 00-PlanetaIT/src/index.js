import server from './services/server';
import {initDb} from './services/database'

const PORT = process.env.PORT || 3002

    const init = async () => {
        await initDb()
        server.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT} - PID WORKER ${process.pid} `))
    }
    
    init();