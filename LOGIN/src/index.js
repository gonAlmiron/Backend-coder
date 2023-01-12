import server from './services/server'
import {initDb} from './services/db'
import Config from './config/index'
import cluster from 'cluster';
import os from 'os';
import minimist from 'minimist';

// const numCPUs = os.cpus().length

// console.log(numCPUs)

// if (cluster.isPrimary) {

//     for (let i = 0; i <= numCPUs; i++) {
//         cluster.fork();
//     }

//     cluster.on('exit', (worker, code) => {
//         console.log(`worker ${worker.process.pid} died`)
//         cluster.fork();
//     })

// } else {

// const argumentsObject = {
//     alias: {
//         p: 'puerto'
//     },
//     default: {
//         puerto: '8080'
//     }
// }
// const args = minimist(process.argv, argumentsObject)

 

    const init = async () => {
        await initDb()
        server.listen(Config.PUERTO, () => console.log(`Escuchando en el puerto ${Config.PUERTO} - PID WORKER ${process.pid} `))
    }
    
    init();

// }

 