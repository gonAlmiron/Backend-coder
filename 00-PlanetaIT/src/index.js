import server from './services/server';
import {initDb} from './services/db'

const PORT = process.env.PORT || 8080;

const init = async () => {
  await initDb()
  server.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT} - PID WORKER ${process.pid} `))
}

init();